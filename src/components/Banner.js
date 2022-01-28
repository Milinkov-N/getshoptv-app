import useAppContext from '../contexts/AppContext'
import { useEffect, useState } from 'react'
import './banner.css'

export default function Banner() {
  const { setPromoIsOpened } = useAppContext()
  const [bannerIsShowing, setBannerIsShowing] = useState(false)

  useEffect(() => {
    setTimeout(() => setBannerIsShowing(true), 5000)
  }, [])

  const openPromo = () => setPromoIsOpened(true)
  return (
    <>
      { bannerIsShowing && (
        <div className="banner">
          <h2 className="banner__title">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</h2>
          <img className="banner__image" src="/qr-code.jpg" alt="qr-code" />
          <span className="banner__desc">Сканируйте QR-код или нажмите ОК</span>
          <button className="banner__btn" onClick={ openPromo }>OK</button>
        </div>
      )}
    </>
  )
}
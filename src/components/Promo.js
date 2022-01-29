import './promo.css'
import Panel from './Panel'
import Slider from './Slider'
import useAppContext from '../contexts/AppContext'
import { PromoContextProvider } from '../contexts/PromoContext'

export default function Promo() {
  const { setPromoIsOpened, sliderIsShowing } = useAppContext()

  const closePromo = () => setPromoIsOpened(false)

  return (
    <PromoContextProvider>
      <div className="promo__wrapper">
        <Slider />
        { !sliderIsShowing && <Panel /> }
        <button className="promo__close-btn" onClick={ closePromo }>&times;</button>
        { !sliderIsShowing && <QRCode /> }
      </div>
    </PromoContextProvider>
  )
}

function QRCode() {
  return (
    <div className="promo__qr-code">
      <p>Сканируйте qr-код для получения дополнительной информации</p>
      <img src="/qr-code.jpg" alt='qr-code' />
    </div>
  )
}
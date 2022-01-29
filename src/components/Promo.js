import './promo.css'
import Panel from './Panel'
import Slider from './Slider'
import useAppContext from '../contexts/AppContext'
import { PromoContextProvider } from '../contexts/PromoContext'

export default function Promo() {
  const { setPromoIsOpened } = useAppContext()

  const closePromo = () => setPromoIsOpened(false)

  return (
    <PromoContextProvider>
      <div className="promo__wrapper">
        <Slider />
        <Panel />
        <button className="promo__close-btn" onClick={ closePromo }>&times;</button>
        <div className="promo__qr-code">
          <p>Сканируйте qr-код для получения дополнительной информации</p>
          <img src="/qr-code.jpg" alt='qr-code' />
        </div>
      </div>
    </PromoContextProvider>
  )
}
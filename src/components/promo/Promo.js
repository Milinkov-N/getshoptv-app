import './promo.css'
import { Panel } from '..'
import { Slider } from '..'
import useAppContext from '../../contexts/AppContext'
import { PromoContextProvider } from '../../contexts/PromoContext'
import { CSSTransition } from 'react-transition-group'

export default function Promo() {
  const { setPromoIsOpened, sliderIsShowing, setIsPlaying } = useAppContext()

  const closePromo = () => {
    setIsPlaying(true)
    setPromoIsOpened(false)
  }

  return (
    <PromoContextProvider>
      <div className="promo__wrapper">
        <Slider />
        <Panel />
        <button className="promo__close-btn" onClick={ closePromo }>&times;</button>
        <QRCode sliderIsShowing={ sliderIsShowing } />
      </div>
    </PromoContextProvider>
  )
}

function QRCode({ sliderIsShowing }) {
  return (
    <CSSTransition
      in={ !sliderIsShowing }
      timeout={ 300 }
      classNames="qr-code"
      unmountOnExit
    >
      <div className="promo__qr-code">
        <p>Сканируйте qr-код для получения дополнительной информации</p>
        <img src="/qr-code.jpg" alt='qr-code' />
      </div>
    </CSSTransition>
  )
}
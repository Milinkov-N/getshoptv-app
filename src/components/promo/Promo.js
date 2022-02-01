import './promo.css'
import { Panel, Slider, Dialog, Keyboard } from '..'
import useAppContext from '../../contexts/AppContext'
import { PromoContextProvider } from '../../contexts/PromoContext'
import { CSSTransition } from 'react-transition-group'

export default function Promo() {
  const { setPromoIsOpened, sliderIsShowing, setIsPlaying, setDialogIsCompleted } = useAppContext()

  const keys = [
    {
      id: 1,
      value: '1',
    },
    {
      id: 2,
      value: '2',
    },
    {
      id: 3,
      value: '3',
    },
    {
      id: 4,
      value: '4',
    },
    {
      id: 5,
      value: '5',
    },
    {
      id: 6,
      value: '6',
    },
    {
      id: 7,
      value: '7',
    },
    {
      id: 8,
      value: '8',
    },
    {
      id: 9,
      value: '9',
    },
    {
      id: 10,
      value: 'Стереть',
    },
    {
      id: 11,
      value: '0',
    },
  ]

  const DialogComp = () => (
    <Dialog numberComfirmHandler={ () => setDialogIsCompleted(true) }>
      <Keyboard keys={ keys } />
    </Dialog>
  )

  const closePromo = () => {
    setIsPlaying(true)
    setPromoIsOpened(false)
  }

  return (
    <PromoContextProvider>
      <div className="promo__wrapper">
        <Slider />
        <Panel Dialog={ DialogComp } />
        <button
          className="promo__close-btn"
          onClick={ closePromo }
        >
          &times;
        </button>
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
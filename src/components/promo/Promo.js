import './promo.css'
import { Panel, Slider, Dialog, Keyboard } from '..'
import useAppContext from '../../contexts/AppContext'
import usePromoContext from '../../contexts/PromoContext'
import { CSSTransition } from 'react-transition-group'

export default function Promo() {
  const { sliderIsShowing, setDialogIsCompleted, closePromo } = useAppContext()
  const { selectedKey } = usePromoContext()

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
    {
      id: 12,
      value: 'Подтвердить номер',
    },
    {
      id: 13,
      value: 'close',
    },
  ]

  const DialogComp = () => (
    <Dialog numberComfirmHandler={ () => setDialogIsCompleted(true) }>
      <Keyboard keys={ keys } />
    </Dialog>
  )

  return (
    <div className="promo__wrapper">
      <Slider />
      <Panel Dialog={ DialogComp } />
      <button
        className={ `promo__close-btn ${ selectedKey === 13 ? 'selected' : '' }` }
        onClick={ closePromo }
      >
        &times;
      </button>
      <QRCode sliderIsShowing={ sliderIsShowing } />
    </div>
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
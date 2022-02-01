import useAppContext from '../../contexts/AppContext'
import { FinalScreen } from '..'
import { CSSTransition } from 'react-transition-group'
import './panel.css'

export default function Panel({ Dialog }) {
  const { dialogIsCompleted, setDialogIsCompleted, sliderIsShowing } = useAppContext()

  return (
    <CSSTransition
    in={ !sliderIsShowing }
    timeout={ 300 }
    classNames="panel"
    unmountOnExit
    >
      <div className="panel">
        <div className="panel__wrapper">
          { !dialogIsCompleted
              ? <Dialog />
              : <FinalScreen />
          }
        </div>
      </div>
    </CSSTransition>
  )
}
import useAppContext from '../contexts/AppContext'
import Dialog from './Dialog'
import FinalScreen from './FinalScreen'
import './panel.css'

export default function Panel() {
  const { dialogIsCompleted, setDialogIsCompleted } = useAppContext()

  return (
    <div className="panel">
      <div className="panel__wrapper">
        { !dialogIsCompleted
            ? <Dialog numberComfirmHandler={ () => setDialogIsCompleted(true) } />
            : <FinalScreen />
        }
      </div>
    </div>
  )
}
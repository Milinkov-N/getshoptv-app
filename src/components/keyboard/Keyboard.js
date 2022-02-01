import usePromoContext from '../../contexts/PromoContext'
import './keyboard.css'

export default function Keyboard({ keys }) {
  const { handleKeyClick, selectedKey } = usePromoContext()

  return (
    <div className="keyboard">
      {keys.map(key => {
        if (key.id === 12 || key.id === 13) return null
        return (
          <button
            key={ key.id }
            className={ `keyboard__key ${ key.id === 10 ? 'col-span-2' : '' } ${ selectedKey === key.id ? 'selected' : '' }` }
            id={ key.id }
            onClick={ () => handleKeyClick(key.id, key.value) }
            onKeyUp={ e => e.target.blur() }
            onKeyDown={ e => console.log(e.key) }
          >
            { key.value }
          </button>
        )
      })}
    </div>
  )
}
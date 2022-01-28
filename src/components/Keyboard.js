import usePromoContext from '../contexts/PromoContext'
import './keyboard.css'

export default function Keyboard() {
  const keys = [
    {
      id: 'key-1',
      value: '1',
    },
    {
      id: 'key-2',
      value: '2',
    },
    {
      id: 'key-3',
      value: '3',
    },
    {
      id: 'key-4',
      value: '4',
    },
    {
      id: 'key-5',
      value: '5',
    },
    {
      id: 'key-6',
      value: '6',
    },
    {
      id: 'key-7',
      value: '7',
    },
    {
      id: 'key-8',
      value: '8',
    },
    {
      id: 'key-9',
      value: '9',
    },
    {
      id: 'erase',
      value: 'Стереть',
    },
    {
      id: 'key-0',
      value: '0',
    },
  ]

  const { setNumber } = usePromoContext()

  return (
    <div className="keyboard">
      {keys.map(key => (
        <button
          key={ key.id }
          className={ `keyboard__key ${ key.id === 'erase' ? 'col-span-2' : '' }` }
          id={ key.id }
          onClick={ () => {
            setNumber(prevNumber => handler(prevNumber, key))
          }}
        >
          { key.value }
        </button>
      ))}
    </div>
  )
}

function handler(prevNumber, key) {
  const newNumber = [...prevNumber]
  const nextChar = prevNumber.findIndex(el => el === '_')

  if (nextChar === -1) {
    if(key.id === 'erase') {
      newNumber.pop()
      return [...newNumber, '_']
    }
    return prevNumber
  }

  if(key.id === 'erase') {
    if (nextChar === 0) return prevNumber
    
    newNumber[nextChar - 1] = '_'
    return [...newNumber]
  }

  newNumber[nextChar] = key.value

  return [...newNumber]
}
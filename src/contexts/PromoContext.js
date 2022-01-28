import { createContext, useCallback, useContext, useState } from 'react'
import { useKeyDown } from 'react-keyboard-input-hook'

const PromoContext = createContext()

export default function usePromoContext() {
  return useContext(PromoContext)
}

export const PromoContextProvider = ({ children }) => {
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])
  const [selectedKey, setSelectedKey] = useState(5)

  const handleKeyDown = useCallback(({ keyName }) => {
    switch (keyName) {
      case 'ArrowDown':
        setSelectedKey(key => key + 3)
        break;
      case 'ArrowUp':
        setSelectedKey(key => key - 3)
        break;
      case 'ArrowLeft':
        setSelectedKey(key => key - 1)
        break;
      case 'ArrowRight':
        setSelectedKey(key => key + 1)
        break;
    
      default:
        break;
    }
  }, [selectedKey])

  useKeyDown(handleKeyDown)

  function handleKeyClick(key) {
    setNumber(prevNumber => {
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
    })

    setSelectedKey(key.value)
  }

  return (
    <PromoContext.Provider value={{
      number, 
      setNumber,
      handleKeyClick,
      selectedKey,
    }}>
      { children }
    </PromoContext.Provider>
  )
}
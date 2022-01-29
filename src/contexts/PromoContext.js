import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useKeyDown } from 'react-keyboard-input-hook'

const PromoContext = createContext()

export default function usePromoContext() {
  return useContext(PromoContext)
}

export const PromoContextProvider = ({ children }) => {
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])
  const [numberIsCompleted, setNumberIsCompleted] = useState(false)
  const [policyIsChecked, setPolicyIsChecked] = useState(false)
  const [selectedKey, setSelectedKey] = useState(5)

  const handleKeyDown = useCallback(({ keyName }) => {
    // console.log(`pressed ${ keyName === 'Digit1' }`);
    switch (keyName) {
      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9':
      case 'Digit0':
        const keyDigit = keyName.substring(5)
        handleKeyClick(parseInt(keyDigit), parseInt(keyDigit))
        break;
      case 'ArrowDown':
        setSelectedKey(key => {
          switch (key) {
            case 10:
              return 1
            case 11:
              return 3
            case 7, 8:
              return 10
            case 9:
              return 11
            default:
              return key + 3
          }
        })
        break;
      case 'ArrowUp':
        setSelectedKey(key => {
          switch (key) {
            case 1:
              return 10
            case 2:
              return 10
            case 3:
              return 11
            case 11:
              return 9
            default:
              return key - 3
          }
        })
        break;
      case 'ArrowLeft':
        setSelectedKey(key => {
          if (key === 1) return 11

          return key - 1
        })
        break;
      case 'ArrowRight':
        setSelectedKey(key => {
          if (key === 11) return 1
          
          return key + 1
        })
        break;
      case 'Enter':
        if (selectedKey === 11) {
          handleKeyClick(selectedKey, 0)
        } else {
          handleKeyClick(selectedKey, selectedKey)
        } 
        break;
      case 'Backspace':
        handleKeyClick(10, 10)
        break;
      default:
        break;
    }
  }, [selectedKey])

  useKeyDown(handleKeyDown)

  function handleKeyClick(id, value) {
    setNumber(prevNumber => {
      const newNumber = [...prevNumber]
      const nextChar = prevNumber.findIndex(el => el === '_')
      
      // Если курсор находится в конце номера
      if (nextChar === -1) {
        // Если нажата кнопкть 'Стереть', то заменяем последний символ на нижнее подчеркивание
        if(id === 10) {
          setNumberIsCompleted(false)
          newNumber.pop()
          return [...newNumber, '_']
        }
        return prevNumber
      }
      
      // Если нажата кнопкть 'Стереть'
      if(id === 10) {
        // Если курстор стоит на первой цифре,то  не мутируем state
        if (nextChar === 0) return prevNumber
    
        newNumber[nextChar - 1] = '_'
        return [...newNumber]
      }
    
      newNumber[nextChar] = value
    
      return [...newNumber]
    })

    setSelectedKey(parseInt(id))
  }

  useEffect(() => {
    if (number[number.length - 1] !== '_') {
      setNumberIsCompleted(true)
    }
  }, [number])

  return (
    <PromoContext.Provider value={{
      number, 
      setNumber,
      handleKeyClick,
      selectedKey,
      numberIsCompleted,
      policyIsChecked,
      setPolicyIsChecked
    }}>
      { children }
    </PromoContext.Provider>
  )
}
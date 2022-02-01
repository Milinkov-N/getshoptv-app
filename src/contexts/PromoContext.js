import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useKeyDown } from 'react-keyboard-input-hook'
import validateNumber from '../utils/validateNumber'
import useAppContext from './AppContext'

const PromoContext = createContext()

export default function usePromoContext() {
  return useContext(PromoContext)
}

export const PromoContextProvider = ({ children }) => {
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])
  const [numberIsCompleted, setNumberIsCompleted] = useState(false)
  const [numberIsValid, setNumberIsValid] = useState(true)
  const [policyIsChecked, setPolicyIsChecked] = useState(false)
  const [selectedKey, setSelectedKey] = useState(5)

  const { setDialogIsCompleted, closePromo } = useAppContext()

  const handleKeyDown = useCallback(({ keyName }) => {
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
            case 13:
              return 1
            case 12:
              return 1
            case 11:
              return 12
            case 10:
              return 12
            case 9:
              return 12 
            case 8:
            case 7:  
              return 10 
            default:
              return key + 3
          }
        })
        break;
      case 'ArrowUp':
        setSelectedKey(key => {
          switch (key) {
            case 13:
              return 12
            case 12:
              return 10
            case 11:
              return 9
            case 3:
            case 2:
            case 1:
              return 12
            default:
              return key - 3
          }
        })
        break;
      case 'ArrowLeft':
        setSelectedKey(key => {
          if (key === 1) return 13

          return key - 1
        })
        break;
      case 'ArrowRight':
        setSelectedKey(key => {
          switch (key) {
            case 11:
              return 12
            case 12:
              return 13
            case 13:
              return 1
            default:
              return key + 1
          }
        })
        break;
      case 'Enter':
        switch (selectedKey) {
          case 13:
            closePromo()
            break;
          case 12:
            const isDisabled = numberIsValid && setNumberIsCompleted && policyIsChecked
            if (!isDisabled) return

            setDialogIsCompleted(true)
            break;
          case 11:
            handleKeyClick(selectedKey, 0)
            break;
          default:
            handleKeyClick(selectedKey, selectedKey)
            break;
        }
        break;
      case 'Backspace':
        handleKeyClick(10, 10)
        break;
      default:
        break;
    }
  }, [selectedKey, closePromo, numberIsValid, policyIsChecked, setDialogIsCompleted])

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
    async function fetchData() {
      if (number[number.length - 1] !== '_') {
        const { IsValid } = await validateNumber(number)

        IsValid === 'Yes' ? setNumberIsValid(true) : setNumberIsValid(false) 

        setNumberIsCompleted(true)
      }
    }

    fetchData()
  }, [number])

  return (
    <PromoContext.Provider value={{
      number, 
      setNumber,
      handleKeyClick,
      selectedKey,
      setSelectedKey,
      numberIsCompleted,
      numberIsValid,
      policyIsChecked,
      setPolicyIsChecked
    }}>
      { children }
    </PromoContext.Provider>
  )
}
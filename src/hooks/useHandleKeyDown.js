import { useState, useCallback } from 'react'
import { useKeyDown } from 'react-keyboard-input-hook'
import usePromoContext from '../contexts/PromoContext'
// import useHandleKeyClick from './useHandleKeyClick'

export default function useHandleKeyDown() {
  const [selectedKey, setSelectedKey] = useState(5)
  const { handleKeyClick } = usePromoContext()

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
            case 10:
              return 1
            case 11:
              return 3
            case 7:
            case 8:
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

  const hook = useKeyDown(handleKeyDown)

  return [selectedKey, setSelectedKey, hook]
}
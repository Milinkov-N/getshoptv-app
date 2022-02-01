import { useEffect, useState } from 'react'

export default function useHandleKeyClick(nemNum) {
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])
  const [numberIsCompleted, setNumberIsCompleted] = useState(false)

  let numberSetter

  // function numberSetter({ id, value, setSelectedKey }) {
  //   setNumber(prevNumber => {
  //     const newNumber = [...prevNumber]
  //     const nextChar = prevNumber.findIndex(el => el === '_')
  //     // Если курсор находится в конце номера
  //     if (nextChar === -1) {
  //       // Если нажата кнопкть 'Стереть', то заменяем последний символ на нижнее подчеркивание
  //       if(id === 10) {
  //         setNumberIsCompleted(false)
  //         newNumber.pop()
  //         return [...newNumber, '_']
  //       }
  //       return prevNumber
  //     }
      
  //     // Если нажата кнопкть 'Стереть'
  //     if(id === 10) {
  //       // Если курстор стоит на первой цифре,то  не мутируем state
  //       if (nextChar === 0) return prevNumber
    
  //       newNumber[nextChar - 1] = '_'
  //       return [...newNumber]
  //     }
    
  //     newNumber[nextChar] = value
    
  //     return []
  //   })

  //   //  setSelectedKey(parseInt(id))
  // }

  useEffect(() => {
    setNumber(number)
  }, [number])
  
  return [number, numberSetter]
}
import { createContext, useContext, useState } from 'react'

const PromoContext = createContext()

export default function usePromoContext() {
  return useContext(PromoContext)
}

export const PromoContextProvider = ({ children }) => {
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])

  return (
    <PromoContext.Provider value={{number, setNumber}}>
      { children }
    </PromoContext.Provider>
  )
}
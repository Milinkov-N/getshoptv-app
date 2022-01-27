import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export default function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [promoIsOpened, setPromoIsOpened] = useState(false)
  return (
    <AppContext.Provider value={{promoIsOpened, setPromoIsOpened}}>
      { children }
    </AppContext.Provider>
  )
}
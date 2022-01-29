import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export default function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [promoIsOpened, setPromoIsOpened] = useState(false)
  const [dialogIsCompleted, setDialogIsCompleted] = useState(false)
  const [sliderIsShowing, setSliderIsShowing] = useState(false)
  return (
    <AppContext.Provider value={{
      promoIsOpened,
      setPromoIsOpened,
      dialogIsCompleted,
      setDialogIsCompleted,
      sliderIsShowing,
      setSliderIsShowing
    }}>
      { children }
    </AppContext.Provider>
  )
}
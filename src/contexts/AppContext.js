import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export default function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [promoIsOpened, setPromoIsOpened] = useState(false)
  const [dialogIsCompleted, setDialogIsCompleted] = useState(false)
  const [sliderIsShowing, setSliderIsShowing] = useState(false)
  const [bannerIsShowing, setBannerIsShowing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  const closePromo = () => {
    setIsPlaying(true)
    setPromoIsOpened(false)
  }

  return (
    <AppContext.Provider value={{
      promoIsOpened,
      setPromoIsOpened,
      dialogIsCompleted,
      setDialogIsCompleted,
      sliderIsShowing,
      setSliderIsShowing,
      bannerIsShowing,
      setBannerIsShowing,
      isPlaying,
      setIsPlaying,
      closePromo
    }}>
      { children }
    </AppContext.Provider>
  )
}
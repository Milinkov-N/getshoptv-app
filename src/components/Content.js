import Banner from './Banner'
import Promo from './Promo'
import useAppContext from '../contexts/AppContext'

export default function Content() {
  const { promoIsOpened } = useAppContext()
  
  const VideoBanner = () => {
    return (
      <>
        <div className="video" />
        <Banner />
      </>
    )
  }

  return (
    <>
      { promoIsOpened ? <Promo /> : <VideoBanner /> }
    </>
  )
}
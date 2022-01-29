import Banner from './Banner'
import Promo from './Promo'
import useAppContext from '../contexts/AppContext'
import Slider from './Slider'

export default function Content() {
  const { promoIsOpened } = useAppContext()
  
  const VideoBanner = () => {
    return (
      <>
        {/* <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Banner /> */}
        <Slider />
      </>
    )
  }

  return (
    <>
      { promoIsOpened ? <Promo /> : <VideoBanner /> }
    </>
  )
}
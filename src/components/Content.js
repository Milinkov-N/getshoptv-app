import Banner from './Banner'
import Promo from './Promo'
import useAppContext from '../contexts/AppContext'
import ReactPlayer from 'react-player/lazy'

export default function Content() {
  const { promoIsOpened, setBannerIsShowing, isPlaying } = useAppContext()
  
  const VideoBanner = () => {
    return (
      <>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </>
    )
  }

  return (
    <>
      <ReactPlayer
        width={ 1280 }
        height={ 720 }
        url='https://www.youtube.com/watch?v=M7FIvfx5J10'
        controls={ true }
        muted={ true }
        playing={ isPlaying }
        onPlay={ () => {
          setTimeout(() => setBannerIsShowing(true), 5000)
        }}
      />
      <Banner />
      { promoIsOpened && <Promo /> }
    </>
  )
}
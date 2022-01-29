import { Swiper, SwiperSlide } from 'swiper/react'
import './slider.css'

// import Swiper core and required modules
import SwiperCore, {
  Keyboard, Pagination, Navigation
} from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// install Swiper modules
SwiperCore.use([Keyboard,Pagination,Navigation])

export default function Slider() {
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={ 1 }
        spaceBetween={ 0 }
        keyboard={{
          "enabled": false
        }}
        
        navigation={ false }
      >
        <SwiperSlide>
          <img src='./slide-1.jpg' alt='slide 1 image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./slide-2.jpg' alt='slide 2 image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./slide-3.jpg' alt='slide 3 image' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
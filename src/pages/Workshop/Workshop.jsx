import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "../../components/Heading";
import WorkshopCard from "./WorkshopCard";
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './../../index.css'

const Workshop = () => {
    const workshopData =
    [
      {
        name: "Introduction to Machine Learning for Signal Processing",
        description:
          "Explore the exciting intersection of machine learning and signal processing in this hands-on workshop.The workshop provides practical experience and invaluable foundational knowledge and insights that are highly relevant in academic, professional, and industry settings.",
        image:'/Images/ml.jpeg'
      },
      {
        name: "Introduction to Image Processing using Python",
        description:
          "Dive into the world of image processing with this hands-on workshop using Python. Learn the fundamentals of manipulating and analyzing images through practical coding exercises.",
        image:'/Images/img-py.jpeg'
      },
      
    ]

  let swiperInstance = null;
  return (
    <section id="workshops" className="bg-black py-12 relative overflow-hidden">

    <div className="gradient-circle absolute  left-10"></div>
    <div className="gradient-circle absolute  right-10"></div>
    <div className="gradient-circle absolute bottom-0 left-1/4"></div>

      <Heading heading="workshops" />
        <Swiper
            onSwiper={(swiper) => (swiperInstance = swiper)}
            loop={true}
            autoplay={{ delay: 3000,disableOnInteraction: true,}}
            modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows:false
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
                {   
                workshopData.map((workshop,index)=>(
                  <SwiperSlide key={index}>
                  <WorkshopCard
                  name={workshop.name}
                  description={workshop.description}
                  image={workshop.image}
                  onMouseEnter={() => swiperInstance?.autoplay.stop()} // Pause autoplay
                  onMouseLeave={() => swiperInstance?.autoplay.start()} // Resume autoplay
                  /> 
                </SwiperSlide>
                ))
              }    
          </Swiper>
  </section>
  )
}
export default Workshop
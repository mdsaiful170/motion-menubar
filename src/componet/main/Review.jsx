import { Container } from "../shear/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviewData } from "../../data";
import { ReviewCard } from "../shear/ReviewCard";
import { Heading } from "../shear/Heading";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
const Review = () => {
  return (
    <>
      <section className="px-3 mt-16 lg:mt-[90px]">
        <Heading className={"lg:mb-10"}>Our Review</Heading>
        <Container>
          <Swiper
            className="relative"
            slidesPerView={"auto"}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={15}
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            speed={350}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
                el: ".swiper-pagination",
                type: "fraction",
                clickable: true,
  
            }}
            coverflowEffect={{
              rotate: 2,
              stretch: 0,
              depth:80,
              modifier: 4,
            }}
            navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
                clickable: true,
            }}
          >
            {reviewData.map((res) => (
              <SwiperSlide key={res.id} className=" max-w-xs md:max-w-[370px] lg:max-w-[380px] w-full mx-auto">
                <ReviewCard {...res} />
              </SwiperSlide>
            ))}
            <br/>

            <div className="max-w-[250px] mx-auto flex items-center justify-between">
              <i
                className="ri-arrow-left-line swiper-next p-1 px-2 cursor-pointer  rounded-full border border-darkBg/50
               dark:border-darkGreen/30 bg-darkBg/5 backdrop-blur-xl text-xl font-bold"
              ></i>
              <i
                className="ri-arrow-right-line swiper-prev p-1 px-2 cursor-pointer  rounded-full border border-darkBg/50
               dark:border-darkGreen/30 bg-darkBg/5 backdrop-blur-xl text-xl font-bold"
              ></i>
            </div>
            <br/>
            <div className="swiper-pagination"></div>
          </Swiper>
        </Container>
      </section>
     
    </>
  );
};

export default Review;

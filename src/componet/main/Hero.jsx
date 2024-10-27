import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css/pagination";
import "remixicon/fonts/remixicon.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Herocard } from "../shear/Herocard";
import { carData } from "../../data";

const Hero = () => {
  return (
    <>
      <section className=" px-3 ">
        <div className="max-w-screen-xl mx-auto border dark:border-darkGreen/25 border-bgcolor bg-darkBg/5 backdrop-blur-[5px] py-8 rounded-lg">
          <Swiper
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            className="relative"
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction",
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
          >
            {carData.map((res) => (
              <SwiperSlide key={res.id}>
                <Herocard {...res} />
              </SwiperSlide>
            ))}

            <div className="absolute swiper-next preClick cursor-pointer top-[50%] right-2 md:right-10 dark:border-darkGreen/50  active:bg-darkGreen dark:active:text-darkBg  border-darkBg/50 border rounded-full px-2 py-1 z-10 ">
              <i className="ri-arrow-right-line font-bold"></i>
            </div>
            <div className="absolute  swiper-prev top-[50%] left-2 md:left-10 dark:border-darkGreen/50 active:bg-darkGreen dark:active:text-darkBg  border-darkBg/50 border  cursor-pointer rounded-full px-2 py-1 z-10 ">
              <i className="ri-arrow-left-line"></i>
            </div>

            <div className="swiper-pagination mt-6"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;

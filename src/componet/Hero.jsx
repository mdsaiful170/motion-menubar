import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ChevronRight } from "lucide-react";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

const Hero = () => {
  return (
    <>
      <section className="  pt-20 pb-10 px-3 -z-50">
        <div className="max-w-screen-xl mx-auto border bg-darkBg/5 backdrop-blur-[5px] p-10 rounded-lg">
          <div className="text-center">
            <h1 className="text-6xl font-bold dark:text-bgcolor">
              hello world
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              ipsa nesciunt mollitia dignissimos asperiores odio illum
              exercitationem. Quo, fugit et? Consequuntur maiores architecto
              tempora temporibus veritatis nemo sunt a rem!
            </p>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Hero;

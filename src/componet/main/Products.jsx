import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { cardDatabox } from "../../data";
import { Productbox } from "../shear/Productbox";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Container } from "../shear/Container";
import { Heading } from "../shear/Heading";

const Products = () => {
  return (
    <>
      <section className="px-3 mt-16 lg:mt-[90px]">
        <Heading>Our Produts</Heading>
        <Container>
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={15}
            modules={[Autoplay, Pagination, Navigation]}
            className="relative"
            // centeredSlides={true}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
            speed={300}
            freeMode={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1080: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {cardDatabox.map((res) => (
              <SwiperSlide key={res.id}>
                <Productbox {...res} className={"cursor-pointer"} />
              </SwiperSlide>
            ))}
            <br />
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

export default Products;

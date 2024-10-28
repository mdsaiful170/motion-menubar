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
      <section className="px-3 mt-[90px]">
       <Heading>Our Produts</Heading>
        <Container>
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={15}
            modules={[Autoplay,Pagination, Navigation]}
            className="relative"
            speed={2000}
            freeMode={true}
            onAutoplay={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {           
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640:{
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {           
                slidesPerView: 3,
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
                <Productbox {...res} />
              </SwiperSlide>
            ))}

            <div>
              <i className="ri-arrow-left-line"></i>
              <i className="ri-arrow-right-line"></i>
            </div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default Products;

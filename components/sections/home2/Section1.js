"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function Section1() {
  return (
    <>
      <section className=" pt-4 pb-28 flex flex-col gap-8 relative">
        <div className="">
         
          <p className="text-lg md:text-lg pb-6 text-neutral-950 dark:text-neutral-dark-950 font-light text-center z-10 relative">
            Unlocking Wonder, One Month at a Time: Your Toddler's Path to
            Discovery!{" "}
          </p>
        </div>
        <div className=" z-10 relative">
          <div className="swiper-container post-slider-6">
            <Swiper {...swiperOptions} className="swiper-wrapper pt-4">
              <SwiperSlide className="swiper-slide hover-up">
                <div className="w-full h-64 relative rounded-3xl overflow-hidden">
                  <Link href="/category">
                    <img
                      className="left-0 top-0 absolute rounded-3xl"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366074/rs_w_1535_m_4_a5jnes.jpg"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide hover-up">
                <div className="w-full h-64 relative rounded-3xl overflow-hidden">
                  <Link href="/category">
                    <img
                      className="left-0 top-0  h-64 absolute rounded-3xl"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366072/rs_w_1535_m_1_emttdl.jpg"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide hover-up">
                <div className="w-full h-64 relative rounded-3xl overflow-hidden">
                  <Link href="/category">
                    <img
                      className="left-0 top-0 absolute rounded-3xl"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366072/rs_w_1535_m_eqcdq1.jpg"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide hover-up">
                <div className="w-full h-64 relative rounded-3xl overflow-hidden">
                  <Link href="/category">
                    <img
                      className="left-0 top-0 absolute rounded-3xl"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366072/rs_w_1535_m_2_hk66wp.jpg"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide hover-up">
                <div className="w-full h-64 relative rounded-3xl overflow-hidden">
                  <Link href="/category">
                    <img
                      className="left-0 top-0 absolute rounded-3xl"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366071/rs_w_1535_m_5_kxdqec.jpg"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide hover-up">
                <div className="w-full h-64 relative rounded-3xl overflow-hidden">
                  <Link href="/category">
                    <img
                      className="left-0 top-0 absolute rounded-3xl"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366071/rs_w_1535_m_3_u9dout.jpg"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
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
      slidesPerView: 3,
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

export default function Hero() {
  return (
    <>
      <section className="w-full h-full">
     <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719530345/Copy_of_Blue_Print_for_webpage_1499_x_699_px_gf8vns.png" alt="" />
      </section>
    </>
  );
}

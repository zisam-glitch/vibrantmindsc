"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  loop: true,

  centeredSlides: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function Section1() {
  return (
    <>
      <section className="bg-[#FFDE59] pt-20 pb-32 flex flex-col gap-8 relative">
        <div className="container px-10 gap-0 md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="w-full h-48 relative rounded overflow-hidden">
              <img
                className="left-0 object-cover w-full h-full  top-0 absolute rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366072/rs_w_1535_m_2_hk66wp.jpg"
              />
            </div>
            <h2 className="font-custom pt-6 text-center text-2xl font-bold text-black">
              Fun Activiated
            </h2>
          </div>
          <div>
            {" "}
            <div className="w-full h-48 relative rounded overflow-hidden">
              <img
                className="left-0 object-cover w-full h-full  top-0 absolute rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366071/rs_w_1535_m_3_u9dout.jpg"
              />
            </div>
            <h2 className="font-custom pt-6 text-center text-2xl font-bold text-black">
              Literacy Riched{" "}
            </h2>
          </div>
          <div>
            {" "}
            <div className="w-full h-48 relative rounded overflow-hidden">
              <img
                className="left-0 object-cover w-full h-full  top-0 absolute rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366072/rs_w_1535_m_eqcdq1.jpg"
              />
            </div>
            <h2 className="font-custom pt-6 text-center text-2xl font-bold text-black">
              STEM Inspired{" "}
            </h2>{" "}
          </div>
          <div>
            {" "}
            <div className="w-full h-48 relative rounded overflow-hidden">
              <img
                className="left-0 object-cover w-full h-full top-0 absolute rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718366072/rs_w_1535_m_1_emttdl.jpg"
              />
            </div>
            <h2 className="pt-6 font-custom text-center text-2xl font-bold text-black">
              Math-Infused
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./BannerCard.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const BannerCard = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/BtKVGD1/Fairy-Tale.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Kjk3XtM/TNY-Best-Books2020-EPJones.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/M7S2pd5/113.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qWKfVvp/pro-pbid-14233.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/1nq3MvB/Harry-Potter-and-the-Cursed-Child-Special-Rehearsal-Edition-Book-Cover.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jJ9xchP/57773552.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0fFsVwg/download-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LpyCpvS/58891551.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/k0RQ8nC/60657583.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;

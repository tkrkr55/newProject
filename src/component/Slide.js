import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Slide() {
  const items = [
    { src: "https://www.dior.com/couture/var/dior/storage/images/horizon/fragrance/collection-privee-christian-dior/the-mitzah-scarves/les-foulards-mitzah-cover/17429592-26-kor-KR/les-foulards-mitzah-cover_1440_1200.jpg" },
    { src: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:best,dpr_auto,f_auto/1673952620513-vday23frduoonemajeurdesk2880x900jpg_900x2880.jpg" },
    { src: "https://img.ssfshop.com/display/category/BDM/A01/contents/22443_258414_6_KOR_20230210163603.jpg" },
    
  ];
  return (
    <>
       <Swiper
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="main_wrap">
              <img className="main_img" src={item.src} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

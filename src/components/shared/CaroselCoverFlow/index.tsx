import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import { useEffect, useState } from "react";

import styles from "./caroselCoverFlow.module.css";

interface CaroselCoverFlowProps {
  slidesPerViewProps?: number;
  listSlides: any[];
}

export default function CaroselCoverFlow({
  slidesPerViewProps,
  listSlides,
}: CaroselCoverFlowProps) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSlidesPerView(window.innerWidth > 768 ? slidesPerViewProps || 3 : 1.5);
    });
  }, [listSlides]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className={styles.swiper}
      >
        {listSlides.map((slide: any) => (
          <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

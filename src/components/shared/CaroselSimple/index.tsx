import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";

import styles from "./caroselSimple.module.css";

interface CaroselSimpleProps {
  slidesPerViewProps?: number;
  listSlides: any[];
}

export default function CaroselSimple({
  slidesPerViewProps,
  listSlides,
}: CaroselSimpleProps) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSlidesPerView(window.innerWidth > 768 ? slidesPerViewProps || 3 : 1.5);
    });
  }, [listSlides]);

  return (
    <>
      <Swiper
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {listSlides.map((slide: any) => (
          <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

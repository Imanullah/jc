'use client';
import React from 'react';
// import { Swiper as SwiperType } from 'swiper';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { useSwiperStore } from '@/stores/swiperStore';
import { useBaseContext } from '@/providers/BaseProvider';

export default function SwiperComponent() {
  // const paginationRef = useRef<HTMLButtonElement | null>(null);
  const { setIsAction, setIsActive } = useBaseContext();

  const paginationParams = {
    el: '.pagination-swipe',
    // dynamicBullets: true,
    clickable: true,
  };

  return (
    <div>
      <ViewTransition name="front-text">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{ nextEl: '.next-el', prevEl: '.prev-el' }}
          pagination={paginationParams}
          centeredSlides={true}
          className="w-full"
          onReachBeginning={() => {
            setIsActive(true);
          }}
          onReachEnd={() => {
            setIsAction(true);
          }}
          onSlideChange={(swiper) => {
            if (!swiper.isBeginning) {
              setIsActive(true);
            } else {
              setIsActive(false);
            }

            if (!swiper.isEnd) setIsAction(false);
          }}
          onBeforeInit={() => {
            setIsAction(false);
            setIsActive(false);
          }}
          // onSwiper={(swiper) => {
          //   if (swiper.isBeginning) setIsAction(false);
          // }}
        >
          <SwiperSlide>
            <p className="font-bagoss text-center self-stretch text-[24px] font-normal leading-7 tracking-[0.22px]">
              <span className="text-neutral-50">Professionals around the world shared how they feel abo</span>
              <span className="text-neutral-50/50 ">ut technology and I've listened. Now it's your turn.</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bagoss text-center self-stretch text-[24px] font-normal leading-7 tracking-[0.22px]">
              <span className="text-neutral-50">I'll ask you a handful of meaningful questions </span>
              <span className="text-neutral-50/50 ">and compare your responses with people in your industry.</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bagoss text-center self-stretch text-[24px] font-normal leading-7 tracking-[0.22px]">
              <span className="text-neutral-50">Slide 3 You'll get insights into current industry sentiments and </span>
              <span className="text-neutral-50/50 ">a reality check about technology in a few minutes. Deal? Great!</span>
            </p>
          </SwiperSlide>
        </Swiper>
      </ViewTransition>
    </div>
  );
}

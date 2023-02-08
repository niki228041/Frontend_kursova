import { useSwiperSlide } from 'swiper/react';

export default function SlideTitle() {
  const swiperSlide = useSwiperSlide();

  return (
    <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p>
  );
}
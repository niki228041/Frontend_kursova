import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button>
  );
}
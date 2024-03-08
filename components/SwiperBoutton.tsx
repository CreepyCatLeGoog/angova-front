import { useSwiper } from "swiper/react";

interface SwiperButtonProps {
  action: "next" | "prev"; // La prop action doit être soit "next" soit "prev"
}

const SwiperButton = ({ action }: SwiperButtonProps) => {
  const swiper = useSwiper();
  
  const handleButtonClick = () => {
    if (action === "next") {
      swiper.slideNext();
    } else if (action === "prev") {
      swiper.slidePrev();
    }
  };

  return <button className={action} onClick={handleButtonClick}>{action === "next" ? "Next" : "Prev"}</button>;
};

export default SwiperButton;
import { useState, useRef, useEffect } from "react";
import "./Carousel.css";
import munu1 from "./img/menu1.jpg";
import munu2 from "./img/menu2.jpg";
import munu3 from "./img/menu3.jpg";

const TOTAL_SLIDES = 3; // 전체 슬라이드 개수(총3개. 배열로 계산)

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  
  const move = (e) => {
    const buttonType = e.target.className;
    if(buttonType === "nextButton") {
        setCurrentSlide((currentSlide + 1) % TOTAL_SLIDES);
    } else {
        setCurrentSlide(currentSlide - 1 < 0 ? (TOTAL_SLIDES - 1) : (currentSlide - 1))
    }
  };

  useEffect(
    () => {slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;}, 
    [currentSlide]
  );
    
  return (
    <div className="container">
      <h1>{currentSlide + 1}번 째 사진</h1>
      <div className="carousel-container" ref={slideRef}>
        <img className="slider" src={munu1}></img>
        <img className="slider" src={munu2}></img>
        <img className="slider" src={munu3}></img>
      </div>
      <div className="button-container">
        <button className="prevButton" onClick={move}>
          Prev
        </button>
        <button className="nextButton" onClick={move}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

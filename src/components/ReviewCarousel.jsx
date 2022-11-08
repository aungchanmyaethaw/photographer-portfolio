import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { people as peopleData } from "../datas";
import Slide from "./Slide";
const ReviewCarousel = () => {
  const [people] = useState(peopleData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [currentIndex]);

  function handlePrevSlide() {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return people.length - 1;
      }

      return prev - 1;
    });
  }

  function handleNextSlide() {
    setCurrentIndex((prev) => {
      if (prev === people.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  }

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[1.315rem]  text-secondary font-heading font-bold mb-10 ">
        Reviews
      </h4>

      <div className="carousel-container">
        {people.map((person, personIndex) => {
          let currentCls = "nextSlide";

          if (personIndex === currentIndex) {
            currentCls = "currentSlide";
          }

          if (
            personIndex === currentIndex - 1 ||
            (personIndex === people.length - 1 && currentIndex === 0)
          ) {
            currentCls = "lastSlide";
          }
          return <Slide {...person} key={person.id} currentCls={currentCls} />;
        })}
        <button className="prev" onClick={handlePrevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={handleNextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;

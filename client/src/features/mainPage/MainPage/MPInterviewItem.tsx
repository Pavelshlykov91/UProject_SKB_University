import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

export default function MPInterviewItem() {
  const ints = useSelector((store: RootState) => store.interviews.interviews);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <div>Интервью</div>
      <Slider {...settings} ref={sliderRef}>
        {ints.map((int) => (
          <div className="mp_interview_it_cont" key={int.id}>
            <div>{int.title}</div>
            <div>
              <img src={int.url} alt={int.title} />
            </div>
          </div>
        ))}
        <div>Перейти к Интервью</div>
      </Slider>
      <div className="v_more">V</div>
      <button onClick={previousSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

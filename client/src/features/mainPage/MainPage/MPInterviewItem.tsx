/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import { Link } from 'react-router-dom';

export default function MPInterviewItem() {
  const preints = useSelector((store: RootState) => store.interviews.interviews);
  const midinst = preints.slice()
  const ints = midinst.reverse()
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    sliderRef.current ? sliderRef.current.slickNext() : sliderRef;
    console.log(12345);
  };

  const previousSlide = () => {
    sliderRef.current ? sliderRef.current.slickPrev() : sliderRef;
  };

  return (
    <div>
      <div className="mp_header">Интервью</div>
      <div className='slider_cont'>
      <Slider {...settings} ref={sliderRef}>
        {ints.map((int) => (
          <div className='slide_cont'>
          <div className="mp_interview_it_cont" key={int.id}>
            <div >
              <img className='mp_interview_it_img' src={int.url} />
            </div>
            <Link to={`/interviews/${int.id}`}> <div className='mp_interview_it_header'>{int.title}</div></Link>
          </div>
          </div>
        ))}
        <div>
          <Link to={'/interviews'}>Перейти к Интервью</Link>
          </div>
      </Slider>
      </div>
      <br />
      <br />
      <button className='slider_butt' id='back' onClick={previousSlide}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="97" viewBox="0 0 46 97" fill="none">
<path d="M37 9L11 48.5L37 88" stroke="#313C8D" strokeWidth="17" strokeLinecap="round"/>
</svg></button>
      <button className='slider_butt' id='next' onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="97" viewBox="0 0 46 97" fill="none">
  <path d="M9 9L35 48.5L9 88" stroke="#313C8D" strokeWidth="17" strokeLinecap="round"/>
</svg></button>
    </div>
  );
}

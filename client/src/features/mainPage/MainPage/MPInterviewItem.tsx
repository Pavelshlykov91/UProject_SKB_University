import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

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
            <div className='mp_interview_it_header'>{int.title}</div>
          </div>
          </div>
        ))}
        <div>Перейти к Интервью</div>
      </Slider>
      </div>
      <br />
      <br />
      <button className='slider_butt' id='back' onClick={previousSlide}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="97" viewBox="0 0 46 97" fill="none">
<path d="M37 9L11 48.5L37 88" stroke="#313C8D" stroke-width="17" stroke-linecap="round"/>
</svg></button>
      <button className='slider_butt' id='next' onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="97" viewBox="0 0 46 97" fill="none">
  <path d="M9 9L35 48.5L9 88" stroke="#313C8D" stroke-width="17" stroke-linecap="round"/>
</svg></button>
    </div>
  );
}

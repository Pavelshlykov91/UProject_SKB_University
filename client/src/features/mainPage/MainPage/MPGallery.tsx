/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

export default function MPGallery() {
  const photos = useSelector((store: RootState) => store.albums.albums);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    sliderRef.current ? sliderRef.current.slickNext() : sliderRef;
    console.log(12345555);
  };

  const previousSlide = () => {
    sliderRef.current ? sliderRef.current.slickPrev() : sliderRef;
  };

  return (
    <div className='mp_gal'>
      <div className="mp_header">Новое в галлерее</div>
      <Slider {...settings} ref={sliderRef}>
        {photos.map((ph) => (
          <div  key={ph.id}>
            <div>
              <img className="mp_gallery_img" src={ph.url} alt={ph.title} />
            </div>
            <div className="mp_gallery_name">{`Пользователь добавил новый альбом ${ph.title}`}</div>
            {/* <div className='mp_gal_s'>''</div> */}
            <div className="mp_gallery_desc">{ph.content}</div>
          </div>
        ))}
      </Slider>
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

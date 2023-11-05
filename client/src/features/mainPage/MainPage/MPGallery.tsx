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
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <div>Новое в галлерее</div>
      <Slider {...settings} ref={sliderRef}>
        {photos.map((ph) => (
          <div className="mp_gallery_img" key={ph.id}>
            <img src={ph.url} alt={ph.title} />
            <div className="mp_gallery_name">{`Пользователь добавил новый альбом ${ph.title}`}</div>
            <div className="mp_gallery_desc">{ph.content}</div>
          </div>
        ))}
      </Slider>
      <button onClick={previousSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

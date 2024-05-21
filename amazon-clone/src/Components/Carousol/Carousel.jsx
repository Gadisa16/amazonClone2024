import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((ImageItemLink, index) => (
          <img key={index} src={ImageItemLink} alt={`Image ${index}`} />
        ))}
      </Carousel>

      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;

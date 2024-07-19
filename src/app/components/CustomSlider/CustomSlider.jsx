import React from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import {CustomSliderContainer} from './CustomSlider.styles'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

function CustomSlider(props) {
  const {
    sliderSettings = {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
    className = '',
    infinite = false,
    children,
  } = props || {}

  return (
    <CustomSliderContainer className={className}>
      <Slider
        {...sliderSettings}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        infinite={infinite}
        speed={100}
      >
        {children}
      </Slider>
    </CustomSliderContainer>
  )
}

export default CustomSlider

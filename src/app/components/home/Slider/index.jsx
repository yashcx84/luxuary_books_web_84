import React, {Component} from 'react'
import Slider from 'react-slick'
// import './styles.css'
import RightArrow from './components/RightArrow'
import LeftArrow from './components/LeftArrow'
import settings from './settings.json'
import {StyledSliderContainer} from './styles'

settings.nextArrow = <RightArrow />
settings.prevArrow = <LeftArrow />

class Carousel extends Component {
  render() {
    const {slidesToShow, slidesToScroll, category, children, hideBlur} =
      this.props
    settings.slidesToShow = slidesToShow || 1
    settings.slidesToScroll = slidesToScroll || 1
    settings.nextArrow = <RightArrow {...{category, hideBlur}} />
    settings.prevArrow = <LeftArrow {...{category}} />

    return (
      <StyledSliderContainer className="slider__wrapper">
        <Slider {...settings}>{children}</Slider>
      </StyledSliderContainer>
    )
  }
}

export default Carousel
export {LeftArrow, RightArrow}

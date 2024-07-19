import {useRef, useState, useMemo} from 'react'
import Carousel from 'react-carousel-light'
import ArrowLeft from '../../../../public/images/ArrowLeft.svg'
import ArrowRight from '../../../../public/images/ArrowRight.svg'
import {StyledCustomCarousel} from './styles'
import {NextArrow, PrevArrow} from '../CustomSlider'
/*
use custom_carousel_wrapper_style for styling wrapper of carousel

pass custom icons for left and right arrows


*/
const CustomCarousel = (props) => {
  const [iconShow, setIconShow] = useState({
    prev: false,
    next: false,
  })
  const {
    scrollWidth = 360,
    scrollDuration = 500,
    iconLeft = null,
    iconRight = null,
    renderSvgArrows = false,
    ...rest
  } = props
  // for handle next and prev btn
  const nextBtnRef = useRef(null)
  const prevBtnRef = useRef(null)

  const handleNextClick = () => {
    if (nextBtnRef && nextBtnRef.current) nextBtnRef.current.click()
  }
  const handlePrevClick = () => {
    if (prevBtnRef && prevBtnRef.current) prevBtnRef.current.click()
  }

  const handleAfterScroll = ({
    isScrollable,
    hasReachedStart,
    hasReachedEnd,
    totalSlides,
    currentSlideIndex,
  }) => {
    // if content is not scrollable
    if (!isScrollable) {
      setIconShow({next: false, prev: false})
      return
    }

    //if reach to end
    if (totalSlides === currentSlideIndex + 1) {
      setIconShow({next: false, prev: !hasReachedStart})
      return
    }
    setIconShow({next: !hasReachedEnd, prev: !hasReachedStart})
  }

  let iconL = ArrowLeft
  if (iconLeft !== null) {
    iconL = iconLeft
  }
  let iconR = ArrowRight
  if (iconRight !== null) {
    iconR = iconRight
  }

  const nextArrow = useMemo(
    () =>
      renderSvgArrows ? (
        <NextArrow className="icon-arrow" />
      ) : (
        <img src={iconR} alt="arrow right" className="icon-arrow" />
      ),
    [iconR, renderSvgArrows]
  )

  const prevArrow = useMemo(
    () =>
      renderSvgArrows ? (
        <PrevArrow className="icon-arrow" />
      ) : (
        <img src={iconL} alt="arrow left" className="icon-arrow" />
      ),
    [iconL, renderSvgArrows]
  )

  return (
    <StyledCustomCarousel className="custom_carousel_wrapper_style">
      <span
        className={`cust_car_icon right ${iconShow.next ? 'show' : ''}`}
        onClick={handleNextClick}
      >
        {nextArrow}
      </span>
      <span
        onClick={handlePrevClick}
        className={`cust_car_icon left ${iconShow.prev ? 'show' : ''}`}
      >
        {prevArrow}
      </span>
      <Carousel
        navButtonScrollLength={scrollWidth}
        navButtonScrollDuration={scrollDuration}
        navButtonNextRef={nextBtnRef}
        navButtonPrevRef={prevBtnRef}
        easing="in-out-cube"
        afterScroll={handleAfterScroll}
        {...rest}
      >
        {props.children}
      </Carousel>
    </StyledCustomCarousel>
  )
}

export default CustomCarousel

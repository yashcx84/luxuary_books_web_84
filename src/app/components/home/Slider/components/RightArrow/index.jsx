import React from 'react'
import { StyledRightArrowContainer } from './styles'
// import './styles.css'

function RightArrow(props) {
  const { className, hideBlur, onClick, arrowColor, category } = props
  return (
    <StyledRightArrowContainer>
      {hideBlur && (
        <div className="right-arrow__blur-wrapper">
          <div
            className={`right-arrow__blur`}
            hidden={hideBlur || className.includes('slick-disabled')}
          ></div>
        </div>
      )}
      <div
        hidden={className.includes('slick-disabled')}
        className="right-arrow__wrapper"
        data-product-category={category}
      >
        <div className={`right-arrow__circle ${className}`} onClick={onClick}>
          <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330" >
            <path id="XMLID_2_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605
	l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396
	l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998
	c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
          </svg>
        </div>
      </div>
    </StyledRightArrowContainer>
  )
}

export default RightArrow

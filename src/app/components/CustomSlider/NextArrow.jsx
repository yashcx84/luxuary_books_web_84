import React from 'react'

import {CustomArrowContainer} from './CustomSlider.styles'

function NextArrow(props) {
  const {className, style, onClick} = props

  return (
    <CustomArrowContainer
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      style={style}
      className={className}
      onClick={onClick}
    >
      <g filter="url(#filter0_d_5459_6213)">
        <circle cx="50" cy="40" r="30" fill="white" />
      </g>
      <path
        d="M45.5 49L54.5 40L45.5 31"
        strokeWidth="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_5459_6213"
          x="0"
          y="0"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5459_6213"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5459_6213"
            result="shape"
          />
        </filter>
      </defs>
    </CustomArrowContainer>
  )
}

export default NextArrow

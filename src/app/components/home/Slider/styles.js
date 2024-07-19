import styled from 'styled-components'

export const StyledSliderContainer = styled.div`

  width: 100%;
  .slick-track {
    display: flex;
    margin: auto 0;
  }

  .slick-initialized {
    display: flex;
    align-items: center;
    position: relative;
  }

  .slick-list {
    width: 100%;
    overflow: hidden;
  }

  .slider__wrapper .slick-arrow {
    cursor: pointer;
    z-index: 3;
    position: absolute;
    width: calc(30px + (40 - 30) * ((100vw -300px) / (1440 - 300)));
    /* height: calc(30px + (40 - 30) * ((100vw -300px) / (1440 - 300))); */
    -webkit-tap-highlight-color: transparent;
  }
  .slider__wrapper .left-arrow__circle {
    left: calc(0px - (25px + (46 - 25) * ((100vw - 500px) / (1440 - 500))));
  }
  .slider__wrapper .right-arrow__circle {
    right: calc(0px - (25px + (46 - 25) * ((100vw - 500px) / (1440 - 500))));
  }
`

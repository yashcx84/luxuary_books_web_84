import styled from 'styled-components'

export const StyledCustomCarousel = styled.div`
  position: relative;

  .cust_car_icon {
    position: absolute;
    z-index: 1;
    top: calc(20%);
    display: none;
    cursor: pointer;
  }
  .cust_car_icon img {
    width: 90px;
  }

  .cust_car_icon.left {
    left: -45px;
  }
  .cust_car_icon.right {
    right: -45px;
  }

  .carousel-nav-button {
    display: none;
  }

  @media (min-width: 768px) {
    .cust_car_icon.show {
      display: block;
    }
  }
`

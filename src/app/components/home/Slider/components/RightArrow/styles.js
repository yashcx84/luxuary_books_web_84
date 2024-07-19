import styled from 'styled-components'

export const StyledRightArrowContainer = styled.div`
  .right-arrow__wrapper {
    position: relative;
  }

  .right-arrow__circle {
    background: var(--brand-primary-white-color);
    box-shadow: 0 0.25rem 0.25rem rgb(0, 0, 0, 0.1);
    height: 40px;
    width: 40px;
    border-radius: 1.25rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.5rem;
    right: -60px;
  }

  .right-arrow__blur-wrapper {
    height: 100%;
    position: absolute;
    right: 0;
  }
  .right-arrow__blur {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 5vw;
    margin-left: auto;
    background-image: linear-gradient(
      to right,
      #fdfdfd08,
      #ffffff00,
      rgba(255, 255, 255, 1)
    );
  }

  .right-arrow__circle path {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
  .right-arrow__circle path.default {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
`

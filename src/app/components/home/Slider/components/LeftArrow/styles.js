import styled from 'styled-components'

export const StyledLeftArrowContainer = styled.div`
  z-index: 10;

  .left-arrow__circle {
    background: var(--brand-primary-white-color);
    box-shadow: 0px 0.25rem 0.25rem rgb(0, 0, 0, 0.1);
    height: 40px;
    width: 40px;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.5rem;
    left: -60px;
  }

  .left-arrow__circle path {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
  .left-arrow__circle path.default {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
`

import styled from "styled-components";

export const BookJourneyEvenItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-image: url('/images/character_bg.png');
    background-position: right center;
    align-items: center; /* Vertically center items */
    justify-content: center; /* Horizontally center items */

    .book-item-image {
        height: fit-content;
        width: 130px;
        margin-top: -10px;
        align-self: center;
    }

    .book-journey-title {
        font-size: 19px;
        font-family: 'primary font', sans-serif;
        margin: 0px 67px 0px 67px;
        text-align: center;
        color: var(--brand-navbar-background-color);
    }
    .book-journey-subtitle {
        font-size: 9px;
        font-family: 'Gayathri font', sans-serif;
        margin: 5px 67px 8px 67px;
        color: var(--brand-navbar-background-color);
    }

`;
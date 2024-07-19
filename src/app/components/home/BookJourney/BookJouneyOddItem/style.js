import styled from "styled-components";

export const BookJourneyOddItemWrapper = styled.div`
    display: flex;
    margin-right: 126px;
    background-repeat: no-repeat;
    background-image: url('/images/character_bg.png');
    background-size: auto 100%;
    background-position: left center;

    .book-item-image {
        height: auto;
        width: 237px;
        margin-top: 121px;
    }

    .book-details-container {
        display: flex;
        flex-direction: column;
        margin-top: 34px;
        margin-right: 100px;
        flex: 1;
        
    }
    
    .book-journey-title {
        font-size: 35px;
        font-family: 'primary font', sans-serif;
        margin-top: 80px;
        margin-right: 25px;
        margin-left: 100px;
        color: var(--brand-navbar-background-color);

    }
    .book-journey-subtitle {
        font-size: 16px;
        font-family: 'Gayathri font', sans-serif;
        margin-top: 10px;
        margin-right: 325px;
        margin-left: 100px;
        color: var(--brand-navbar-background-color);
        margin-bottom: 10px;
    }
    
`;
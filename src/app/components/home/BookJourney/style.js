import styled from "styled-components";

export const BookJouneyWrapper = styled.div`
        display: flex;
        flex-direction: column;
        background-repeat: repeat;
        padding-bottom: 10px;
        background-image: url('/images/background_list_mobile.png');

        .header-text {
            font-size: 12px;
            margin-top: 20px;
            text-align: center;
            font-family: 'primary font bold', sans-serif;
            color: var(--brand-navbar-background-color);
        }

    .bgContainer{
        display: flex;
        flex-direction: column;
        background-image: url('/images/FullWaveMobile.svg');
        background-repeat: repeat-y;
    }

    .book-journey-button-container {
        display: flex;
        height: 26px;
        width: 133px;
        border-radius: 13.4px;
        background-color: var(--brand-yellow-color);
        cursor: pointer;
        align-items: center;
        justify-content: center;
        align-self: center;
        margin : 10px 0px 10px 0px
    }
    .book-journey-button-text {
        font-size: 8px;
        margin-top: 9px;
        margin-bottom: 9px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }
    

    @media (min-width: 768px) {
        background-image: url('/images/background_list.png');
        padding-bottom: 0px;

        .header-text {
            font-size: 24px;
            margin-top: 40px;
        }

        .bgContainer{
            display: flex;
            background-image: url('/images/fullwave.svg');
            margin-left: 70px;
            height: fit-content;
        }

        .book-journey-button-container {
            display: flex;
            height: 49px;
            width: 243px;
            border-radius: 24.5px;
            background-color: var(--brand-yellow-color);
            margin : 30px 0px 30px 0px;
        }
        .book-journey-button-text {
            font-size: 16px;
            margin-top: 18px;
            margin-bottom: 17px;
            cursor: pointer;
            font-family: 'primary font bold', sans-serif;
            color: var(--brand-navbar-background-color);

        }
    
    }
`;
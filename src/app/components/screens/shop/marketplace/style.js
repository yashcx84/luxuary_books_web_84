import styled from 'styled-components'

export const MarketPlaceWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--black-color);
        align-self: center;
    }

    .selection-container {
        display: flex;
        flex-direction: row;
    }

    .select-book {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 10px 12px 30px 32px ;
        padding: 9px 20px;
        border-radius: 11.45px;
        border: 1px solid var(--black-color);
        align-items: center;
    }
    .select-book-text {
        font-size: 8px;
        font-family: 'primary font light2', sans-serif;
        color: var(--book-subtitle-color);
        align-self: center;
        flex: 1;
        background-image: url('./images/arrowIconMobile.svg');
        background-repeat: no-repeat;
        background-position: right center;
        appearance: none; // Hide default arrow icon
        -webkit-appearance: none; // For Safari
        -moz-appearance: none;
        background-color: transparent;
        outline: none;
    }

    .select-option-text {
        font-size: 8px;
        font-family: 'primary font light2', sans-serif;
        color: var(--book-subtitle-color);

    }

    .select-country {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 10px 13px 30px 0px ;
        padding: 9px 20px;
        border-radius: 11.45px;
        border: 1px solid var(--black-color);
        align-items: center;
    }

    .marketplace-mobile-list-container {
        display: flex;
        flex-direction: column;
        margin: 0px 70px 30px 70px;
    }

    .marketplace-container {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--book-subtitle-color-60);
        border-radius: 4.72px;
        margin-bottom: 30px;
    }

    .marketplace-image {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100px;
        height: 40px;
        align-self: center;
    }

    .line-seprator{
        background-color: var(--book-subtitle-color-60);
        margin-bottom: 17px;
    }

    .book-title-text {
        font-size: 19.14px;
        font-family: 'primary font light2', sans-serif;
        color: var(--black-color);
        margin: 0px 48px 10px 48px;
        text-align: center;
        max-lines: 2;
    }
    .book-description-text {
        font-size: 8.75px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
        margin: 0px 14px 10px 14px;
        text-align: center;
    }

    .marketplace-button-container {
        display: flex;
        background-color: var(--brand-navbar-background-color);
        border-radius: 13.4px;
        justify-content: center;
        cursor: pointer;
        margin: 10px 35px 26px 35px;
    }

        .marketplace-button-text {
            font-size: 8.75px;
            padding-left: 37px;
            padding-right: 37px;
            padding-top: 9px;
            padding-bottom: 7px;
            font-family: 'primary font bold', sans-serif;
            color: var(--brand-yellow-color);
            cursor: pointer;
        }

    @media (min-width: 768px) {

        .title-text {
            font-size: 25px;
        }

        .select-book {
            padding: 18px 44px;
            border-radius: 24.5px;
            margin: 30px 44px 50px 145px;
        }

        .select-country {
            padding: 18px 44px;
            border-radius: 24.5px;
            margin: 30px 145px 50px 0px;
        }

        .select-book-text {
            font-size: 16px;
            background-image: url('./images/arrowIconWeb.svg');
            background-repeat: no-repeat;
            background-position: right center;
        }

        .select-option-text {
            font-size: 16px;
            font-family: 'primary font light2', sans-serif;
            color: var(--book-subtitle-color);

        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Adjust width as needed */
            gap: 27px;
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 27px;
        }

        .grid-item {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--book-subtitle-color-60);
            border-radius: 4.72px;
            margin-bottom: 27px;
        }

        .marketplace-image {
            margin: 0px 20px 20px ;
            width: 200px;
            height: 120px;
            align-self: center;
        }
        .line-seprator{
            background-color: var(--book-subtitle-color-60);
            margin-bottom: 33px;
        }

        .book-title-text {
            font-size: 28.34px;
            margin: 0px 17px 18px 17px;
        }

        .book-description-text {
            font-size: 15.12px;
            margin: 0px 17px 18px 19px;
        }

        .marketplace-button-container {
            border-radius: 23.15px;
            margin: 18px 27px 36px 24px;
        }

        .marketplace-button-text {
            font-size: 15.12px;
            padding-left: 65px;
            padding-right: 65px;
            padding-top: 17px;
            padding-bottom: 16px;
        }

    }
`;
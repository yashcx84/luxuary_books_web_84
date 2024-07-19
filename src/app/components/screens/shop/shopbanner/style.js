import styled from 'styled-components'

export const ShopBannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px 31px;
    

    .banner-text-container {
        display: flex;
        flex-direction: column;
        flex: 1;

    }


    .banner-image-container {
        display: flex;
        height: fit-content;
        flex: 1;
        /* position: relative; */
        margin-left: 34px;
    }

    .banner-image {
        height: 247px;
        width: 179px;
        /* position: absolute; 
        top: 0;
        right: 0; */
    }

    .shop-banner-title {
        font-size: 50px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }
    .shop-banner-subtitle {
        font-size: 13px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
    }
    .shop-banner-description {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
    }
    

    @media (min-width: 768px) {
        padding: 50px 90px;

        .banner-image-container {
            margin-left: 0px;
            justify-content: end;
        }

        .banner-image {
            height: 500px;
            width: 350px;
        }

        .shop-banner-title {
            font-size: 120px;
            margin-left: 19px;
        }

        .shop-banner-subtitle {
            font-size: 30px;
            margin-left: 19px;
        }

        .shop-banner-description {
            font-size: 16px;
            font-family: 'Gayathri font', sans-serif;
            color: var(--book-subtitle-color);
            margin-left: 19px;
        }

    }
`;
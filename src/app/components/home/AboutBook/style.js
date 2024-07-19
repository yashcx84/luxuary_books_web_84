import styled from "styled-components";

export const AboutBookContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--brand-navbar-background-color);
    padding: 15px;
    width: 100%;
    justify-content: center;
    

    .book-img {
        margin-left: 20px;
        margin-right: 20px;
    }
    .text-container {
        flex: 1;
        display: flex ;
        flex-direction: column;
        justify-content: center;
    }
    .image {
        margin-top: 12px;
        margin-bottom: 7px;
        align-self: center;
    }
    .button-container-aboutbook {
        display: flex;
        background: var(--brand-yellow-color);
        border-radius: 24.5px;
        padding-bottom: 7px;
        padding-top: 7px;
        padding-left: 25px;
        padding-right: 25px;
        align-self: center;
        margin-bottom: 23px;
        margin-top: 7px;
        cursor: pointer;
    }

    .button-text-aboutbook {
      color: var(--brand-navbar-background-color);
      font-size: 6px;
      width: 100%;
      text-align: center;
      align-self: center;
      font-family: 'primary font bold', sans-serif;
      cursor: pointer;
    
    }

    @media (min-width: 768px) {
        height: 250px;
        padding: 40px;

        .book-img {
            margin-left: 61px;
            margin-right: 61px;
        }
        .image {
            margin-top: 30px;
            margin-bottom: 20px;
        }

        .button-container-aboutbook {
            padding-bottom: 18px;
            padding-top: 18px;
            padding-left: 64px;
            padding-right: 64px;
            margin-bottom: 60px;
        }
        .button-text-aboutbook {
            font-size: 16px;
            width: 100%;
            line-height: 19.25px;
        }
    }

`;
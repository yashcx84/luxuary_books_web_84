import styled from 'styled-components'
export const StyledHappyCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('/images/homepage_bg_mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding-top: 10px;

  .banner-content-welcome-text {
    font-size: 10px;
    margin: 15px 15px 0px 15px;
    line-height: 16px;
    text-align: center;
    font-family: 'primary font bold', sans-serif;
    color: var(--brand-primary-white-color);
  }

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background-image: url('/images/homepage_bg.png');

    .banner-content-welcome-text {
      font-size: 20px;
      margin: 30px 30px 0px 30px;
      line-height: 32px;
    }
  }

`;

export const ItemContainer = styled.div`

    width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    
    .book__img img {
      object-fit: contain;
      width: auto;
      height: 161px;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
    .book-title {
      color: var(--book-title-color);
      font-size: 12px;
      line-height: 14.44px;
      font-family: 'primary font bold', sans-serif;
      margin-top: 10px;

    }

    .book-subtitle {
      color: var(--book-subtitle-color);
      font-size: 16px;
      line-height: 19.53px;
      font-family: 'Gayathri font', sans-serif;
      font-weight: var(--brand-font-weight-roman);
      margin-top: 10px;
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 15px;
      margin-right: 40px;
      margin-left: 40px;

    }

    .button-container {
      display: flex;
      background: var(--brand-navbar-background-color);
      border-radius: 24.5px;
      padding: 8px 20px;
      align-items: center;
      margin: 8px 0px 15px;
      cursor: pointer;
    }

    .button-text {
      color: var(--brand-yellow-color);
      font-size: 8px;
      text-align: center;
      font-family: 'primary font bold', sans-serif;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      padding: 50px; 

      .book__img img {
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        height: 450px;
        width: auto;
      }

      .book-title {
        font-size: 25px;
        line-height: 30.8px;
        margin-top: 20px;
      }

      .book-subtitle {

        font-size: 16px;
        line-height: 19.53px;
        margin-top: 10px;
        margin-right: 215px;
        margin-left: 215px;
        text-align: center;
        text-transform: capitalize;
      }

      .button-container {
        padding: 17px 34px;
        margin: 18px 0px 0px;
      }

      .button-text {
        font-size: 16px;
        line-height: 19.25px;
        margin-left: 0px;
      }

    }
  `;
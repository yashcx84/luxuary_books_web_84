import styled from 'styled-components'

export const SendMessgerWrapper = styled.div`

    display: flex;
    flex-direction: column;
    margin: 20px 0px 30px 0px;
    align-items: center;

    .name-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 31px 10px 31px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 11.45px;
        padding: 8px 24px;
        align-items: center;
        width: 300px;
    }

    .name-input-text {
      font-size: 8px;
      flex: 1;
      margin-left: 5px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--book-subtitle-color);
      height: fit-content;
      border: none;
      outline: none;
      background-color: transparent

    }

    .phone-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 31px 10px 31px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 300px;
        padding: 8px 24px;
        align-items: center;
    }

    .message-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 31px 0px 31px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 8px;
        width: 300px;
        min-height: 80px;
        padding: 9px 23px;
    }

    .message-input-area {
      font-size: 8px;
      width: 100%;
      height: 70px;
      margin-left: 4px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--book-subtitle-color);
      border: none;
      margin-top: 4px;
      outline: none;
      background-color: transparent;
      resize: none;

    }

    .button-container {
      display: flex;
      background: var(--brand-navbar-background-color);
      border-radius: 10.2px;
      padding: 7px 20px;
      margin-top: 20px;
      cursor: pointer;
    }

    .button-text {
      color: var(--brand-yellow-color);
      font-size: 6.54px;
      width: 100%;
      cursor: pointer;
      font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
      margin: 50px 0px 50px 0px;

      .name-email-container {
        display: flex;
        flex-direction: row;
      }

      .name-container {
          flex: 1;
          border-radius: 28px;
          margin: 0px 10px 0px 90px;
          width: 440px;
          padding: 20px 60px 20px 60px;
      }

      .name-input-text {
        font-size: 16px;
        margin-left: 10px;
      }

      .email-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 90px 0px 10px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 440px;
        padding: 20px 60px 20px 60px;
        align-items: center;
      }

      .phone-container {
        margin: 20px 90px 0px 90px;
        width: 900px;
        padding: 20px 60px 20px 60px;
      }

      .message-container {
        margin: 20px 90px 0px 90px;
        width: 900px;
        min-height: 194px;
        padding: 20px 60px;
        border-radius: 28px;
      }

      .message-input-area {
        font-size: 16px;
        height: 190px;
        margin-left: 10px;
      }

      .button-container {
        border-radius: 24.5px;
        padding: 18px 49px;
        margin-top: 30px;
      }

      .button-text {
        font-size: 16px;
        line-height: 19.25px;
      }

    }


`;
export const StyledSVG = styled.svg`
  margin-top: 6px;
`;
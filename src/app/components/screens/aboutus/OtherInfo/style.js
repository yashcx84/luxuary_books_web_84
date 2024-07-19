import styled from 'styled-components'

export const OtherInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--brand-navbar-background-color);
    padding: 23px 31px;

    .description{
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--brand-navbar-background-color);
        text-align: center;
        line-height: auto;
        color: var(--brand-primary-white-color);
    }

    .button-container {
      display: flex;
      background: var(--brand-yellow-color);
      border-radius: 9.75px;
      padding: 7px 25px;
      margin-top: 10px;
      cursor: pointer;
      width: fit-content;
      align-self: center;
    }

    .button-text {
      color: var(--brand-navbar-background-color);
      font-size: 6.37px;
      width: 100%;
      cursor: pointer;
      font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
        padding: 50px 90px;
        margin-bottom: 50px;

        .description{
            font-size: 16px;
            line-height: auto;
        }

        .button-container {
            border-radius: 24.5px;
            padding: 18px 64px;
            margin-top: 20px;
        }

        .button-text {
            font-size: 16px;
            line-height: auto;
        }
    }
`;
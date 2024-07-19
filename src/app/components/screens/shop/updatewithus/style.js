import styled from 'styled-components'

export const StayUpdateWrapper = styled.div`

    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 30px;
    align-items: center;
    background-color: var(--brand-navbar-background-color);

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-primary-white-color);
    }
    .description-text {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--brand-primary-white-color);
        margin: 6px 50px 10px 50px;
        text-align: center;
    }

    .subscribe-email-container {
        display: flex;
        flex-direction: row;
        background-color: var(--brand-primary-white-color);
        border-radius: 9.75px;
        margin-left: 96px;
        margin-right: 94px;
        height: 20px;
        width: 240px;
    }

    .email-input-text {
        font-size: 6px;
        flex: 1;
        margin-left: 25px;
        font-family: 'primary font light2' sans-serif;
        color: var(--brand-navbar-background-color);
        height: fit-content;
        border: none;
        outline: none;
        background-color: transparent;
        align-self: center;
    }

    .subscribe-button-container {
        display: flex;
        background-color: var(--brand-yellow-color);
        border-radius: 9.75px;
        height: 100%;
        align-items: center;
        cursor: pointer;
    }

    .subscribe-button-text {
        font-size: 6.37px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        padding-left: 30px;
        padding-right: 30px;
        cursor: pointer;
    }


    @media (min-width: 768px) {
        padding: 50px;
        margin-bottom: 50px;
        .title-text {
            font-size: 25px;
        }
        
        .description-text {
            font-size: 16px;
            margin: 20px 350px;
        }

        .subscribe-email-container {
            border-radius: 24.5px;
            margin-left: 248px;
            margin-right: 247px;
            height: 50px;
            width: 585px;
        }

        .email-input-text {
            font-size: 16px;
            align-self: center;
            margin-left: 44px;
        }

        .subscribe-button-container {
            border-radius: 24.5px;
            padding: 18px 74px;
        }

        .subscribe-button-text {
            font-size: 16px;
        }
    }

`;
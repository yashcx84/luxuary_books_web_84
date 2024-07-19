import styled from 'styled-components'

export const ProfessionalInquiriesWrapper =  styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    padding: 30px;

    .title-text {
        margin: 0px 0px 15px 0px;
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        text-align: center;
    }

    .details-inquiries{
        display: flex;
        flex-direction: row;
        margin: 0px 30px 7px 30px;
    }

    .details-inquiries-text {
        font-size: 8px;
        margin-right: 16px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
    }
    .details-inquiries-value {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--brand-navbar-background-color);
    }

    @media (min-width: 768px) {

        padding: 50px;

        .title-text {
            margin: 0px 0px 30px 0px;
            font-size: 25px;
        }
        .details-inquiries{
            margin: 0px 70px 15px 70px;
        }
        .details-inquiries-text {
            font-size: 16px;
            margin-right: 24px;
        }
        .details-inquiries-value {
            font-size: 16px;
        }
    }
`;
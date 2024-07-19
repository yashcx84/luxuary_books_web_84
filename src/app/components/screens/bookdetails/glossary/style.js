import styled from 'styled-components'

export const GlossaryWrapper =  styled.div`
    display: flex;
    flex-direction: column; 
    padding: 30px;    
    background-color: var(--brand-navbar-background-color);

    .title-text {
        margin: 0px 0px 30px 0px;
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-primary-white-color);
        text-align: center;
    }

    .glossary-list-conainer {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        padding: 30px;

        .title-text {
            margin: 0px 0px 50px 0px;
            font-size: 25px;
        }
    }
`;
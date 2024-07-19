import styled from 'styled-components'

export const AuthorImageWrapper =  styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    padding-bottom: 6px;

    
    .bg-circle-container{
        display: flex;
        margin: 20px 8px 30px 0px;
        height: auto;
        width: 100vw;
        justify-content: center;
    }
    

    .bg-author-image{
        height: 237px;
        width: 220px;
    }

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        margin-bottom: 8px;
    }

    .description-text {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
        text-align: left;
        margin: 0px 65px 0px 65px;
    }

    @media (min-width: 768px) {
        padding-bottom: 16px;
        
        .bg-circle-container{
            display: flex;
            margin: 26px 0px 26px 0px;
        }
        .bg-author-image{
            height: 430px; 
            width: 380px;
        }

        .title-text {
            font-size: 25px;
            margin-bottom: 8px;
        }

        .description-text {
            font-size: 16px;
            line-height: 19.53px;
            text-align: left;
            margin: 8px 242px 8px 242px;
        }

    }
`;
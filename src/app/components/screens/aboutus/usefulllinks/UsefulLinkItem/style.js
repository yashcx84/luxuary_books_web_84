import styled from 'styled-components'

export const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    
    .top-stroke,.bottom-stroke {
        height: 0.41px; 
        background-color: var(--brand-navbar-background-color); 
    }

    .item-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        padding: 7px 8px;
        cursor: pointer;
    }

    .content{
        font-size: 10px;
        flex: 1;
        font-family: 'Gayathri font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        cursor: pointer;
    }

    @media (min-width: 768px) {
        
        margin-bottom: 16px;

        .top-stroke,.bottom-stroke {
            height: 1px; 
        }

        .item-container{
            padding: 16px 20px 16px 20px;
        }
        .content{
            
            font-size: 20px;
        }
    }

`;


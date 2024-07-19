import styled from 'styled-components'

export const TestiMonialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(179, 179, 179, 1);
    padding: 20px;
    justify-content: center;
    align-items: center; /* Center vertically */
    width: auto;

    .title-text {
        color: var(--brand-navbar-background-color);
        font-size: 8px;
        font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
        padding: 50px;
        
        .title-text {
            font-size: 25px;
        }
    }
`;

export const TestimonialItem = styled.div`
    width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;


    .inner-cover-area{

        width: auto;
        max-width: 238px;
        align-items: center;
        justify-content: center;
        margin: 10px 20px 20px 20px;
        display: flex;
        border-radius: 3.98px;
        flex-direction: column;
        background-image:  url('/images/Rectangle.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .review-title {
      color: var(--black-color);
      font-size: 8px;
      font-family: 'Gayathri font', sans-serif;
      z-index: 1;
      margin-top: 5px;

    }

    .quote-image {
        margin-top: -70px;
        margin-right: -11px;
    }

    .text-container {
        display: flex;
        flex-direction: row;
        margin: 10px 13px;
    }

    .user-info-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        align-self: flex-start;
        margin-left: 25px;

    }

    .user-image{
        height: 20px;
        width: 20px;
    }

    .about-user{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-left: 4px;
    }

    .user-name {
      color: var(--book-title-color);
      font-size: 8px;
      font-family: 'primary font light2', sans-serif;
      
    }

    .user-occupation {
      color: var(--book-title-color);
      font-size: 6px;
      font-family: 'primary font light2', sans-serif;
      margin-top: 2px;
    }


    

    @media (min-width: 768px) {
        padding: 50px; 
        
        .inner-cover-area{
            max-width: 727px;
            background-image:  url('/images/Rectangle.svg');
            margin: 13px 20px 0px 20px;
            border-radius: 20px;
            padding: 30px;
        }

        .review-title {
            font-size: 16px;
            margin-left: 2px;
            margin-top: 5px;
        }

        .text-container {
            display: flex;
            flex-direction: row;
            margin: 20px 47px;
        }
        .quote-image {
            margin-top: -105px;
            margin-right: -22px;
        }
        .user-info-container {
            margin-bottom: 30px;
            margin-left: 50px;

        }
        .user-image{
            height: 50px;
            width: 50px;
        }
        .about-user{
            margin-top: 8px;
            margin-left: 10px;
        }
        .user-name {
            font-size: 16px;
        }

        .user-occupation {
            font-size: 12px;
            
        }
        
    }
`;
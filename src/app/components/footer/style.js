import styled from "styled-components";

export const StyledFooter = styled.footer`
  bottom: 0;
  font-family: 'primary font', sans-serif;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 33, 36, 1);

  .image {
    align-self: center;
  }

  .option-container {
    align-self: center;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
  }
  .image-container {
    align-self: center;
    display: flex;
    flex-direction: row;
    margin-top: 21px;
    
    @media (min-width: 768px) {
      margin-top: 24px;

      
    }
  }

  .social-icon {
    margin-right: 17px;
    cursor: pointer;
    @media (min-width: 768px) {
      margin-right: 32px;
    }
  }
`;

export const MenuItem = styled.div`

  .paragraph{
    font-size: 8px;
    font-weight: 300;
    line-height: 9.46px;
    margin-bottom: 10px;
    cursor: pointer;
  }
    

  @media (min-width: 768px) {
    .paragraph{
      font-size: 16px;
      font-weight: 300;
      line-height: 18.93px;
      margin-right: 70px;
    }
  }
`;
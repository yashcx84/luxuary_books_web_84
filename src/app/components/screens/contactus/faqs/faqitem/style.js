import styled from 'styled-components'

export const StyledFaqItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 30px 12px 30px;
    
    .question-text {
      font-size: 10px;
      flex: 1;
      font-family: 'Gayathri font bold' sans-serif;
      color: var(--brand-primary-white-color);
    }
    
    .header {
      padding: 8px;
      display: flex;
      flex-direction: row;
      cursor: pointer;
    }
    .answer-container {
      display: flex;
      flex-direction: column;
    }
    .content {
      font-size: 8px;
      padding: 8px;
      line-height: 20px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--brand-primary-white-color);
    }
    .seprator {
      margin-top: 10px;
      background-color: var(--brand-primary-white-color);
    }
    

  @media (min-width: 768px) {
    margin: 0px 90px 30px 90px;

    .question-text {
      font-size: 20px;
    }
  
    .header {
      padding: 10px;
    }

    .arrow {
      transition: transform 0.3s ease;
    }
  
    .content {
      font-size: 16px;
      padding: 10px;
    }
    .seprator {
      margin-top: 10px;
      line-height: 24px;
    }

  }
  
`;
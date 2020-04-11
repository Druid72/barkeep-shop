import styled from 'styled-components';

export const PersonalInformationContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 700px;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin: 0;
  margin-bottom: 20px;
`;
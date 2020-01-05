import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  min-height: 20px;
  background: #FFF;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 153px;
    height: 100px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

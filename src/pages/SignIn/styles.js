import styled from 'styled-components';
import { darken } from 'polished';

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

  button {
    width: 100%;
    height: 45px;
    background: #EE4D64;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#EE4D64')}
    }
  }
`;

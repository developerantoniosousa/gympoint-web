import styled, { css } from 'styled-components';

function setSize(size) {
  switch (size) {
    case 'small': {
      return css`
        width: 700px;
      `;
    }
    case 'medium': {
      return css`
        width: 900px;
      `;
    }
    default: {
      return css`
        width: 100%;
      `;
    }
  }
}

const Container = styled.div`
  width:100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  ${({ size }) => setSize(size)};
`;

export default Container;

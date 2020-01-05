import styled, { css } from 'styled-components';
import { darken } from 'polished';

function setSize(size) {
  switch (size) {
    case 'small': {
      return css`
        width: 112px;
        height: 36px;
        font-size: 14px;
        line-height: 16px;
      `;
    }
    case 'medium': {
      return css`
        width: 142px;
        height: 36px;
        font-size: 14px;
        line-height: 16px;
      `;
    }
    default: {
      return css`
        width: 100%;
        height: 45px;
        font-size: 16px;
        line-height: 19px;
      `;
    }
  }
}

function setState(state) {
  switch (state) {
    case 'secundary': {
      return css`
        background: #CCCCCC;

        &:hover {
          background: ${darken(0.04, '#CCCCCC')};
        }
      `;
    }
    default: {
      return css`
        background: #EE4D64;

        &:hover {
          background: ${darken(0.04, '#EE4D64')};
        }
      `;
    }
  }
}

export const Container = styled.button`
  color: #FFF;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.2s;
  ${ ({ size }) => setSize(size)};
  ${ ({ state }) => setState(state)};
`;

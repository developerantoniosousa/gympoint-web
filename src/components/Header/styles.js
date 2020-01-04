import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #FFF;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 24px;
      border-right: 1px solid #DDDDDD;
      margin-right: 30px;
      padding-right: 30px;
    }
  }

  ul {
    display: flex;

    li {
      margin-right: 20px;

      a {
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #999;
      }
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end !important;

  strong {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #666666;
  }

  button {
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #DE3B3B;
  }
`;

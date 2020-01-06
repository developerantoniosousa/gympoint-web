import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html, body, #app {
    min-height: 100vh;
  }

  body {
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  table {
    width: 100%;

    thead {
      tr {
        th {
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #444;
          text-align: left;
        }
      }
    }

    tbody {
      tr {
        height: 30px;
        td {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          color: #666;

          button {
            border: none;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            margin: 0 12px;

            &.info {
              color: #4D85EE;
            }

            &.danger {
              color: #DE3B3B;
            }
          }

          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }

  form {
    .react-datepicker-wrapper {
      input {
        align-self: stretch;
        background: #FFFFFF;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        margin-bottom: 15px;
        padding: 13px 15px;
        font-size: 16px;
        line-height: 19px;
        color: #999999;
      }
    }
  }
`;

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
  ${reset};
   
  * {
    margin: 0;
    padding: 0;
  }
   
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: #fff;
    color: #333;
    font-family: 'Nanum Barun Gothic', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  button {
    cursor: pointer;
  }
`;

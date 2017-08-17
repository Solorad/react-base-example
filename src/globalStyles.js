import { injectGlobal } from "styled-components";

import font from "src/resources/fonts/fonts.css";

// styles
import fa from "font-awesome/css/font-awesome.css";

// eslint-disable-next-line no-unused-expressions
injectGlobal` 
  ${fa}
  ${font}
   
   body {
    font-family: 'ProximaNovaRegular';
    font-weight: 400;
    font-size: 15px;
    overflow-x: hidden;
    min-width: 320px;
    color: #383b34;
  }
`;



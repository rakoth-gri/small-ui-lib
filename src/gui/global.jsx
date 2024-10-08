import { createGlobalStyle} from "styled-components";
// static:
import Montserrat from "./assets/fonts/Montserrat-Bold.ttf";
import RobotoLight from "./assets/fonts/Roboto-Light.ttf";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "./assets/fonts/Roboto-Bold.ttf";


// ! GLOBAL STYLES ----------

export default createGlobalStyle`
  *, *::after, *::before {
      box-sizing: border-box;
      padding: 0px;
      margin: 0px;
    }

  @font-face {
      font-family: "Montserrat";
      src: url(${Montserrat});
      font-weight: 700;
      font-style: normal
  }
  
  @font-face {
      font-family: "Roboto";
      src: url(${RobotoLight});
      font-weight: 500;
      font-style: normal
  }
  
  @font-face {
      font-family: "Roboto";
      src: url(${RobotoRegular});
      font-weight: 400;
      font-style: normal
  } 

  @font-face {
      font-family: "Roboto";
      src: url(${RobotoBold});
      font-weight: 700;
      font-style: normal;
  }

  body {
    font-family: 'Roboto';
  }
  
  .title {
    text-align: center;
  }  
`;


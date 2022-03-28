import { createGlobalStyle } from "styled-components";
import { device } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
  font-family: NimbusSanExtReg, sans-serif;
  -webkit-font-smoothing: antialiased;
}


a {
  font-size: 18px;
  letter-spacing: 0px;
}

h1 {
  font-size: 65px;
  font-weight: lighter;
  line-height: 1.1;
  letter-spacing: 0px;
  ${device.tablet} {
    font-size: 52px;;
  }
  ${device.mobile} {
    font-size: 53px;;
  }
}

h2 {
  font-size: 2.37rem;
  font-weight: lighter;
  ${device.tablet} {
    font-size: 26px;
  }
}

h3 {
  font-size:28px;
  font-weight: lighter;
  ${device.tablet} {
    font-size: 22px;
  }
  ${device.mobile} {
    font-size: 34px;
  }
  
}
h4 {
  font-size: 1.3rem;
  font-family: GraphikRegular;
  font-weight: lighter;
  line-height: 30px;
}

h5 {
  text-transform: uppercase;
  font-size: 21px;
  ${device.mobile} {
    font-size: 27.7px;
  }
}

h6 {
  font-size: 1.3rem;
  ${device.mobile} {
    font-size: 13px;
  }
}

a {
  color: inherit;
  text-decoration: none;
}
p {
  line-height: 18px;
  font-size: 16px;
}

.swiper {
  width: 600px;
  height: 300px;
}
`;

export default GlobalStyle;

import styled from "@emotion/styled";
import React from "react";
import { injectGlobal } from "emotion";
import gilroy from "../src/fonts/Gilroy-Regular.ttf";
import gilroyBold from "../src/fonts/Gilroy-Bold.ttf";
import gilroyMedium from "../src/fonts/Gilroy-Medium.ttf";
import sourceSans from "../src/fonts/SourceSansPro-Regular.ttf";
import sourceSansBold from "../src/fonts/SourceSansPro-Bold.ttf";
import ThirdPage from "@src/screens/ThirdPage";
import ProPage from "@src/screens/ProPage/ProPage";
import Reviews from "@src/screens/Reviews";
import FirstPage from "@src/screens/FirstPage/FirstPage";

interface IProps {}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Gilroy";
    font-weight: bold;
    src: url(${gilroyBold});
  }
  @font-face {
    font-family: "Gilroy";
    src: url(${gilroyMedium});
  }
  @font-face {
    font-family: "Gilroy";
    src: url(${gilroy});
  }
  @font-face {
    font-family: "Source Sans Pro";
    src: url(${sourceSans});
  }
  @font-face {
    font-family: "Source Sans Pro";
    font-weight: bold;
    src: url(${sourceSansBold});
  }
  
`;
const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <FirstPage />
        <ThirdPage />
        <ProPage />
        <Reviews />
      </Body>
    </Root>
  );
};
export default App;

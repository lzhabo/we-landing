import styled from "@emotion/styled";
import React from "react";
import Header from "@components/Header/Header";
import WeLoveThings from "@components/WeLoveThings";
import { injectGlobal } from "emotion";
import gilroy from "../src/fonts/Gilroy-Regular.ttf";
import gilroyBold from "../src/fonts/Gilroy-Bold.ttf";
import gilroyMedium from "../src/fonts/Gilroy-Medium.ttf";
import sourceSans from "../src/fonts/SourceSansPro-Regular.ttf";
import sourceSansBold from "../src/fonts/SourceSansPro-Bold.ttf";
import FirstPage from "@components/FirstPage";
import SecondPage from "@components/SecondPage";
import ThirdPage from "@components/ThirdPage";
import ProPage from "@components/ProPage/ProPage";
import Rewiews from "@components/Rewiews";

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
  font-family: Source Sans Pro;
  height: 100vh;
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
        <Header />
        <FirstPage />
        <WeLoveThings />
        <SecondPage />
        <ThirdPage />
        <ProPage />
        <Rewiews />
      </Body>
    </Root>
  );
};
export default App;

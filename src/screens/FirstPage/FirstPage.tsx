import styled from "@emotion/styled";
import React from "react";
import Header from "@src/screens/FirstPage/Header";
import WeLoveThings from "@src/screens/FirstPage/WeLoveThings";
import Benefits from "@src/screens/FirstPage/Benefits";
import ShareYourWork from "@src/screens/FirstPage/ShareYourWork";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
      <ShareYourWork />
      <WeLoveThings />
      <Benefits />
    </Root>
  );
};
export default FirstPage;

import styled from "@emotion/styled";
import React from "react";
import Header from "@components/Header";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC<IProps> = () => {
  return (
    <Root>
      <Header></Header>
    </Root>
  );
};
export default App;

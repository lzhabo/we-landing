import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC<IProps> = () => {
  return <Root>hello</Root>;
}
export default App;
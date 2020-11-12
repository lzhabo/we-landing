import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import { FlexContainer } from "@components/FlexContaner";
import guy1 from "../../assets/guy1.svg";
import guy2 from "../../assets/guy2.svg";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px;
`;

const NavBar: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer alignItems={"center"}>
        <Title
          style={{ fontSize: "20px", lineHeight: "28px", textAlign: "left" }}
        >
          The biggest design community on Instagram. <br />
          By designers, for designers.
        </Title>
        <img src={guy1} />
        <img src={guy2} />
      </FlexContainer>
    </Root>
  );
};
export default NavBar;

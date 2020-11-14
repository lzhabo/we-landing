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
  padding: 50px 23px;
  align-items: center;
`;
const Text = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #6a7076;
  padding: 5px;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  //todo add media query
`;
const Img = styled.img`
  padding: 20px 10px 50px 0;
`;

const NavBar: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <div>
          <Title style={{ textAlign: "left" }}>
            The biggest design <br />
            community on Instagram. <br />
            By designers, for designers.
          </Title>
          <div>
            <Img src={guy1} alt="designer" />
            <Img src={guy2} alt="designer" />
          </div>
        </div>
        <FlexContainer justifyContent={"space-between"}>
          <FlexContainer flexDirection={"column"}>
            <Text style={{ color: "#a9abac", cursor: "default" }}>SITEMAP</Text>
            <Text>Share your work</Text>
            <Text>Resources</Text>
            <Text>About us</Text>
            <Text>FAQ</Text>
            <Text>Submit</Text>
          </FlexContainer>
          <FlexContainer flexDirection={"column"}>
            <Text style={{ color: "#a9abac", cursor: "default" }}>LEGAL</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms and conditions</Text>
          </FlexContainer>
        </FlexContainer>
      </Body>
    </Root>
  );
};
export default NavBar;

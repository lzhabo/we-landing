import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "@components/FlexContaner";
import guy1 from "../../assets/guy1.svg";
import guy2 from "../../assets/guy2.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 23px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    padding: 100px;
  }
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
  @media (min-width: 1440px) {
    min-width: 900px;
    flex-direction: row;
    justify-content: space-between;
  } ;
`;
const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;

  font-feature-settings: "liga" off;

  color: #292c30;
  @media (min-width: 1440px) {
    font-size: 23px;
    line-height: 30px;
  } ;
`;
const ImgWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0 50px;
`;

const NavBar: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <FlexContainer flexDirection={"column"}>
          <Title style={{ textAlign: "left" }}>
            The biggest design <br />
            community on Instagram. <br />
            By designers, for designers.
          </Title>
          <ImgWrap>
            <img src={guy1} alt="designer" style={{ paddingRight: 15 }} />
            <img src={guy2} alt="designer" />
          </ImgWrap>
        </FlexContainer>
        <FlexContainer
          justifyContent={"space-between"}
          style={{ maxWidth: 400 }}
        >
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

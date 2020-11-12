import styled from "@emotion/styled";
import React from "react";
import proLabel from "../../assets/pro-label.svg";
import member from "../../assets/pro-member.svg";
import phone from "../../assets/iphone2.svg";
import { css, jsx } from "@emotion/core";
import { FlexContainer } from "@components/FlexContaner";
import Button from "@components/Button";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import Subtitle2 from "@components/Subtitle2";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #292c30;
  align-items: center;
`;

const Img = styled.img`
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const phoneImgStyle = css`
  width: 260px;
  height: auto;
  z-index: -1;
`;

const memberImgStyle = css`
  position: absolute;
  //left: calc(50% - 112px / 2 - 130px);

  width: 112px;
`;
const ProPage: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer
        flexDirection={"column"}
        alignItems={"start"}
        padding={"60px 23px 40px 23px"}
      >
        <Subtitle2 style={{ color: "#ffffff" }}>Pro</Subtitle2>
        <Title
          style={{ color: "#ffffff", textAlign: "left", paddingBottom: "20px" }}
        >
          Get even more exposure by going <Img src={proLabel} />
        </Title>
        <Subtitle
          style={{ color: "#abafb3", textAlign: "left", paddingBottom: "30px" }}
        >
          Especially for teams and professionals, we launched PRO. Add your logo
          for more brand exposure. Get tagged and cover more screen real estate!
        </Subtitle>
        <Button>See the difference</Button>
      </FlexContainer>

      <FlexContainer alignItems={"center"}>
        <img css={memberImgStyle} src={member} alt="user" />
        <img css={phoneImgStyle} src={phone} alt="phone" />
      </FlexContainer>
    </Root>
  );
};
export default ProPage;

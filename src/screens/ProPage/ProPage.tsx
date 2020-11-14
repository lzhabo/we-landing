/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import proLabel from "../../assets/pro-label.svg";
import member from "../../assets/pro-member.svg";
import phone from "../../assets/iphone2.svg";
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 23px 40px 23px;
  max-width: 360px;
  //todo add media query
`;

const phoneImgStyle = css`
  width: 260px;
  height: auto;
`;

const memberImgStyle = css`
  position: absolute;
  width: 90px;
  left: 217px;
  top: 145px;
`;
const ProPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <Subtitle2 style={{ color: "#ffffff" }}>Pro</Subtitle2>
        <Title
          style={{ color: "#ffffff", textAlign: "left", paddingBottom: "20px" }}
        >
          Get even more exposure by going&nbsp;
          <span style={{ position: "relative" }}>
            <img style={{ position: "absolute" }} src={proLabel} alt="pro" />
          </span>
        </Title>
        <Subtitle
          style={{ color: "#abafb3", textAlign: "left", paddingBottom: "30px" }}
        >
          Especially for teams and professionals, we launched PRO. Add your logo
          for more brand exposure. Get tagged and cover more screen real estate!
        </Subtitle>
        <Button>See the difference</Button>
      </Body>

      <div style={{ position: "relative", marginBottom: -4 }}>
        <img css={memberImgStyle} src={member} alt="user" />
        <img css={phoneImgStyle} src={phone} alt="phone" />
      </div>
    </Root>
  );
};
export default ProPage;

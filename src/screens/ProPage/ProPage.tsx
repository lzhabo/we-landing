/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import proLabel from "../../assets/pro-label.svg";
import member from "../../assets/pro-member.svg";
import phone from "../../assets/iphone2.svg";
import Button from "@components/Button";
import Subtitle from "@components/Subtitle";
import Subtitle2 from "@components/Subtitle2";
import phone2 from "@src/assets/iphone2Big.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #292c30;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 50px;
  } ;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 23px 40px 23px;
  max-width: 360px;
`;

const memberImgStyle = css`
  position: absolute;
  width: 90px;
  left: 217px;
  top: 145px;
  @media (min-width: 1440px) {
    left: 340px;
    top: 225px;
  } ;
`;
const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  font-feature-settings: "liga" off;
  color: #292c30;
  color: #ffffff;
  textalign: left;
  paddingbottom: 20px;

  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 42px;
    padding: 10px 0 10px;
  } ;
`;
const PhoneImg = styled.div`
  background: url(${phone}) center no-repeat;
  width: 260px;
  height: 395px;
  margin: -5px;
  @media (min-width: 1440px) {
    background: url(${phone2}) center no-repeat;
    width: 483px;
    height: 632px;
    margin-bottom: -87px;
  }
`;
const ProPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <Subtitle2 style={{ color: "#ffffff" }}>Pro</Subtitle2>
        <Title style={{}}>
          Get even more exposure by going&nbsp;
          <span style={{ position: "relative" }}>
            <img style={{ position: "absolute" }} src={proLabel} alt="pro" />
          </span>
        </Title>
        <Subtitle
          style={{
            color: "#abafb3",
            textAlign: "left",
            padding: "30px 0 30px",
          }}
        >
          Especially for teams and professionals, we launched PRO. Add your logo
          for more brand exposure. Get tagged and cover more screen real estate!
        </Subtitle>
        <Button>See the difference</Button>
      </Body>

      <div style={{ position: "relative", marginBottom: -4 }}>
        <img css={memberImgStyle} src={member} alt="user" />
        <PhoneImg />
      </div>
    </Root>
  );
};
export default ProPage;

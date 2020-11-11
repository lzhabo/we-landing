/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import phone from "@src/assets/iphone.svg";
import user from "@src/assets/user1.svg";
import favorites from "@src/assets/favoriets.svg";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid;
  border-bottom-color: #e5e5e5;
`;

const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #292c30;

  margin-top: 100px;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 30px;
  text-align: center;
  color: #6a7076;

  margin-bottom: 130px;
`;

const userImgStyle = css`
  position: absolute;
  left: calc(50% - 112px / 2 - 130px);
  bottom: 51.46px;
  width: 112px;
`;

const favoritesImgStyle = css`
  position: absolute;
  left: calc(50% - 73px / 2 + 131.5px);
  bottom: 116.44px;
  width: 73px;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  z-index: -1;
  background: #e6e9ec;
  border-radius: 50%;
  left: calc(50% - 800px / 2);
  bottom: -560px;
`;

const phoneImgStyle = css`
  width: 260px;
  height: auto;
`;
const FirstPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>
        Share your work
        <br /> with 1.8M creatives.
      </Title>
      <Subtitle>
        Get noticed by the biggest design
        <br /> community on IG.
      </Subtitle>
      <FlexContainer
        justifyContent={"center"}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img css={favoritesImgStyle} src={favorites} alt="favorites" />
        <img css={userImgStyle} src={user} alt="user" />
        <img css={phoneImgStyle} src={phone} alt="phone" />
        <Ellipse />
      </FlexContainer>
    </Root>
  );
};
export default FirstPage;

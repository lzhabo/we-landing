/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import phone from "@src/assets/iphone.svg";
import user from "@src/assets/user1.svg";
import favorites from "@src/assets/favoriets.svg";
import { FlexContainer } from "@components/FlexContaner";
import Subtitle from "@components/Subtitle";

interface IProps {}

const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #292c30;

  @media (min-width: 1440px) {
    font-size: 58px;
    line-height: 68px;
  } ;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid;
  border-bottom-color: #e5e5e5;
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
const ShareYourWork: React.FC<IProps> = () => {
  return (
    <Root>
      <Title style={{ paddingTop: 100, paddingBottom: 20 }}>
        Share your work
        <br /> with 1.8M creatives.
      </Title>
      <Subtitle style={{ paddingBottom: 100 }}>
        Get noticed by the biggest design
        <br
          css={css`
            @media (min-width: 1440px) {
              display: none;
            }
          `}
        />
        community on IG.
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
export default ShareYourWork;

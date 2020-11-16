/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import phone from "@src/assets/iphone-bottom.svg";
import { FlexContainer } from "@components/FlexContaner";
import Subtitle2 from "@components/Subtitle2";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #e6e9ec;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  @media (min-width: 1440px) {
    flex-direction: row;
  } ;
`;

const contentContainerStyle = css`
  display: flex;
  max-width: 315px;
  @media (min-width: 1440px) {
    max-width: 390px;
  } ;
`;

const PhoneImg = styled.div`
  background: url(${phone}) center no-repeat;
  width: 400px;
  height: 523.4px;
  @media (min-width: 1440px) {
    background: url(${phone}) center no-repeat; //todo change picture
    width: 483px;
    height: 632px;
  } ;
`;

const DesignersPrivileges: React.FC<IProps> = () => {
  return (
    <Root>
      <PhoneImg />
      <FlexContainer flexDirection={"column"} css={contentContainerStyle}>
        <Subtitle2 style={{ textAlign: "left", color: "#a9abac" }}>
          Credits
        </Subtitle2>
        <Title style={{ textAlign: "left", paddingBottom: "20px" }}>
          All designs © of their respective owners
        </Title>
        <Subtitle style={{ textAlign: "left" }}>
          We at Welovedaily think it's important that it's about you, the
          designer. The appreciation must go to you, not to us.
        </Subtitle>
      </FlexContainer>
    </Root>
  );
};
export default DesignersPrivileges;

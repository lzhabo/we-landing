/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import phone from "@src/assets/iphone-bottom.svg";
import phone2 from "@src/assets/iphone-buttom2.svg";
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
const PhoneImg = styled.div`
  background: url(${phone}) center no-repeat;
  width: 100vw;
  max-width: 400px;
  height: 275px;
  @media (min-width: 1440px) {
    background: url(${phone2}) center no-repeat;
    width: 483px;
    height: 632px;
    margin-top: -86px;
  } ;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 315px;
  @media (min-width: 1440px) {
    max-width: 390px;
  } ;
`;
const DesignersPrivileges: React.FC<IProps> = () => {
  return (
    <Root>
      <PhoneImg />
      <Wrap>
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
      </Wrap>
    </Root>
  );
};
export default DesignersPrivileges;

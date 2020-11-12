/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import phone from "../../assets/iphone-bottom.svg";
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
  padding-bottom: 60px;
`;

const contentContainerStyle = css`
  display: flex;
  max-width: 315px;
`;

const DesignersPrivilages: React.FC<IProps> = () => {
  return (
    <Root>
      <img src={phone} />
      <FlexContainer flexDirection={"column"} css={contentContainerStyle}>
        <Subtitle2 style={{ textAlign: "left", color: "#a9abac" }}>
          Credits
        </Subtitle2>
        <Title style={{ textAlign: "left" }}>
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
export default DesignersPrivilages;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import phone from "../../assets/iphone-bottom.svg";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #e6e9ec;
  align-items: center;
`;
const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  text-align: left;
  font-feature-settings: "liga" off;
  color: #292c30;
`;
const SubTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 60px;
  margin-top: 20px;
  color: #6a7076;
`;
const Credits = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  margin-top: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: rgba(41, 44, 48, 0.4);
`;

const contentContainerStyle = css`
  max-width: 315px;
  padding: 0 23px;
`;

const ThirdPage: React.FC<IProps> = () => {
  return (
    <Root>
      <img src={phone} />
      <FlexContainer flexDirection={"column"} css={contentContainerStyle}>
        <Credits>Credits</Credits>
        <Title>All designs © of their respective owners</Title>
        <SubTitle>
          We at Welovedaily think it's important that it's about you, the
          designer. The appreciation must go to you, not to us.
        </SubTitle>
      </FlexContainer>
    </Root>
  );
};
export default ThirdPage;

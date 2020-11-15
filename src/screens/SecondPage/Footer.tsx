/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import SubmitButton from "@components/SubmitButton";
import koza from "../../assets/small-koza.svg";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  height: 80px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 23px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

const Body = styled.div`
  display: flex;
  max-width: 360px;
  width: 100%;
  position: relative;
  max-width: 360px;
  @media (min-width: 1440px) {
    max-width: 1400px;
  } ;
`;
const HiddenText = css`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
  }
`;
const Subtitle = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;

  text-align: center;

  color: #6a7076;
  white-space: nowrap;
  position: relative;

  @media (min-width: 1440px) {
    position: center;
    width: 80000px;
  }
`;
const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <Subtitle>
          © 2020 Welovedaily &nbsp;
          <span css={HiddenText}>| Build in Rotterdam NL</span>
          <img
            src={koza}
            style={{ position: "absolute", top: -66 }}
            alt="logo"
          />
        </Subtitle>
        <FlexContainer alignItems={"center"}>
          <SubmitButton
            style={{ position: "absolute", right: 0 }}
            onClick={() => alert("submit")}
          />
        </FlexContainer>
      </Body>
    </Root>
  );
};
export default Footer;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import submit from "../../assets/submit.svg";
import { FlexContainer } from "@components/FlexContaner";
import SizedBox from "@components/SizedBox";
import { ReactComponent } from "*.svg";
import SubmitButton from "@components/SubmitButton";

interface IProps {}

const layoutStyle = css`
  max-width: 360px;
  @media (min-width: 1440px) {
    max-width: 1400px;
  } ;
`;

const Root = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  height: 80px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
`;

const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer css={layoutStyle} alignItems={"center"}>
        <FlexContainer alignItems={"center"}>
          <img src={menu} alt={"menu"} />
          <SizedBox width={25} />
          <img src={logo} alt={"logo"} />
        </FlexContainer>
        <FlexContainer justifyContent={"flex-end"}>
          <SubmitButton onClick={() => alert("submit")} />
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default Header;

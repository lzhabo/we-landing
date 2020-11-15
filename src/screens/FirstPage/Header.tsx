/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { FlexContainer } from "@components/FlexContaner";
import SubmitButton from "@components/SubmitButton";

interface IProps {}

const layoutStyle = css`
  max-width: 360px;
  @media (min-width: 1440px) {
    max-width: 1400px;
  } ;
`;
const SmallMenu = css`
  cursor: pointer;
  padding-right: 25px;
  @media (min-width: 1440px) {
    display: none;
  } ;
`;
const HiddenMenu = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
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
const Text = styled.div`
  display: flex;
  lex-direction: column;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;

  text-align: center;
  padding: 0 35px;
  color: #6a7076;
  white-space: nowrap;
  cursor: pointer;
`;
const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer css={layoutStyle} alignItems={"center"}>
        <FlexContainer alignItems={"center"}>
          <img src={menu} alt={"menu"} css={SmallMenu} />
          <img src={logo} alt={"logo"} />
        </FlexContainer>
        <HiddenMenu>
          <Text style={{ color: "#292C30", fontWeight: 600 }}>
            Share your work
          </Text>
          <Text>Resources</Text>
          <Text>About Us</Text>
          <Text>FAQ</Text>
        </HiddenMenu>
        <FlexContainer justifyContent={"flex-end"}>
          <SubmitButton onClick={() => alert("submit")} />
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default Header;

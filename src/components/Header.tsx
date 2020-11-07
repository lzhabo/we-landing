import styled from "@emotion/styled";
import React from "react";
import logo from "../assets/logo.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const LogoWrapper = styled.img``;

const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <LogoWrapper src={logo} />
    </Root>
  );
};
export default Header;

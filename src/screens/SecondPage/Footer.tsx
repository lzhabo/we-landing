/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import SubmitButton from "@components/SubmitButton";
import Subtitle from "@components/Subtitle";
import koza from "../../assets/small-koza.svg";

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
`;
const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Body>
        <Subtitle style={{ fontSize: "15px", position: "relative" }}>
          © 2020 Welovedaily
          <img
            src={koza}
            style={{ position: "absolute", top: -66 }}
            alt="logo"
          />
        </Subtitle>
        <SubmitButton
          style={{ position: "absolute", right: 0 }}
          onClick={() => alert("submit")}
        />
      </Body>
    </Root>
  );
};
export default Footer;

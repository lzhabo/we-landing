import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "@components/FlexContaner";
import SubmitButton from "@components/SubmitButton";
import { css } from "@emotion/core";
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
  padding: 0 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;
const layoutStyle = css`
  max-width: 360px;
  @media (min-width: 1440px) {
    max-width: 1400px;
  } ;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer css={layoutStyle} alignItems={"center"}>
        <FlexContainer alignItems={"center"}>
          <Subtitle style={{ fontSize: "15px" }}>© 2020 Welovedaily</Subtitle>
        </FlexContainer>
        <img src={koza} />
        <FlexContainer justifyContent={"flex-end"}>
          <SubmitButton onClick={() => alert("submit")} />
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default Footer;

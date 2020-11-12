import styled from "@emotion/styled";
import React from "react";
import proLabel from "../../assets/pro-label.svg";
import member from "../../assets/pro-member.svg";
import phone from "../../assets/iphone2.svg";
import { css, jsx } from "@emotion/core";
import { FlexContainer } from "@components/FlexContaner";
import Button from "@components/Button";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #292c30;
  align-items: center;
`;

const Pro = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.66);
  padding: 20px 23px 0 23px;
`;
const phoneImgStyle = css`
  width: 260px;
  height: auto;
`;
const memberImgStyle = css`
  width: 90px;
  height: 85.91px;
`;

const ProPage: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer flexDirection={"column"} alignItems={"center"}>
        {/*<FlexContainer flexDirection={"column"} css={contentContainerStyle}>*/}
        <FlexContainer flexDirection={"column"}>
          <Pro>Pro</Pro>
          <Title style={{ color: "#ffffff" }}>
            Get even more exposure by going{" "}
            <img src={proLabel} style={{ alignItems: "center" }} />
          </Title>
          <Subtitle style={{ color: "#abafb3" }}>
            Especially for teams and professionals, we launched PRO. Add your
            logo for more brand exposure. Get tagged and cover more screen real
            estate!
          </Subtitle>
        </FlexContainer>
        <Button>See the difference</Button>
      </FlexContainer>
      <FlexContainer>
        {/*<img src={member} css={memberImgStyle} />*/}
        <img src={member} />
        <img src={phone} />
        {/*<img src={phone} css={phoneImgStyle} />*/}
      </FlexContainer>
    </Root>
  );
};
export default ProPage;

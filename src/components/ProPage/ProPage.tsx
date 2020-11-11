import styled from "@emotion/styled";
import React from "react";
import Layout from "@components/Layout";
import proLabel from "../../assets/pro-label.svg";
import member from "../../assets/pro-member.svg";
import phone from "../../assets/iphone2.svg";
import button from "../../assets/button.svg";
import { css } from "@emotion/core";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #292c30;
  align-items: center;
`;

const Title = styled.div`
  ont-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;

  font-feature-settings: "liga" off;

  color: #ffffff;
  padding: 0 23px 0 23px;
`;
const Subtitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  color: #abafb3;
  padding: 0 23px 0 23px;
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
  //position: absolute;
  //left: calc(50% - 73px / 2 + 131.5px);
  //bottom: 116.44px;
  //width: 73px;

  width: 90px;
  height: 85.91px;
  left: 249px;
  top: 561px;
`;

const StyledButton = styled.div`
  padding: 10px 0px 0px 20px;

  width: 315px;
  height: 50px;
  background-color: rgb(0 113 255);
`;

const ProPage: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer>
        <Pro>Pro</Pro>
        <Title>
          Get even more exposure by going{" "}
          <img src={proLabel} style={{ alignItems: "center" }} />
        </Title>
        <Subtitle>
          Especially for teams and professionals, we launched PRO. Add your logo
          for more brand exposure. Get tagged and cover more screen real estate!
        </Subtitle>
        <StyledButton>See the difference</StyledButton>
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

/** @jsx jsx */
import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import Subtitle2 from "@components/Subtitle2";
import BlackSlide from "@components/BlackSlide";
import GoldSlide from "@components/GoldSlide";
import { css, jsx } from "@emotion/core";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 23px;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  @media (min-width: 1440px) {
    padding: 100px;
  } ;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: -10px 0;
  & > * {
    margin: 10px 0;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    margin: 0 -15px;
    & > * {
      margin: 0 15px;
    }
  } ;
`;
const Subtitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;

  text-align: center;
  max-width: 360px;
  color: #6a7076;
  padding: 20px 0 40px;

  @media (min-width: 1440px) {
    font-size: 18px;
    max-width: 600px;
  } ;
`;
const SubscriptionPlans: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle2>ARE YOU READY?</Subtitle2>
      <Title>
        Ready to share{" "}
        <br
          css={css`
            @media (min-width: 1440px) {
              display: none;
            }
          `}
        />
        your work?
      </Title>
      <Subtitle>
        Submit your work now. But don’t worry, we will only send you a payment
        link when your work is selected (1-3 days).
      </Subtitle>
      <Wrap>
        <BlackSlide />
        <GoldSlide />
      </Wrap>
    </Root>
  );
};
export default SubscriptionPlans;

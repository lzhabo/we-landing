import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import Subtitle2 from "@components/Subtitle2";
import Subtitle from "@components/Subtitle";
import BlackSlide from "@components/BlackSlide";
import GoldSlide from "@components/GoldSlide";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 1440px) {
    flex-direction: column;
  } ;
`;
const SubscriptionPlans: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle2>ARE YOU READY?</Subtitle2>
      <Title>
        Ready to share <br />
        your work?
      </Title>
      <Subtitle
        style={{ fontSize: "17px", padding: "20px 0 40px", maxWidth: 360 }}
      >
        Submit your work now. But don’t worry, we will only send you a payment
        link when your work is selected (1-3 days).
      </Subtitle>
      <Wrap>
        <BlackSlide />
        <GoldSlide />
      </Wrap>
    </Root>
  );
};
export default SubscriptionPlans;

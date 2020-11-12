import styled from "@emotion/styled";
import React from "react";
import Reviews from "@src/screens/SecondPage/Reviews";
import SubscriptionPlans from "@src/screens/SecondPage/SubscriptionPlans";
import Footer from "@src/screens/SecondPage/Footer";
import NavBar from "@src/screens/SecondPage/NavBar";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Reviews />
      <SubscriptionPlans />
      <NavBar />
      <Footer />
    </Root>
  );
};
export default SecondPage;

import styled from "@emotion/styled";
import React from "react";
import regular from "../assets/regular.svg";
import finger from "../assets/one-finger.svg";
import Subtitle from "@components/Subtitle";
import Button from "@components/Button";
import Question from "@components/Question";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #292c30;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 555px;
  position: relative;
  border-radius: 20px;
  margin: 10px;
`;
const Price = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 30px;

  text-align: center;
  font-feature-settings: "liga" off;

  color: #ffffff;
  padding: 50px 0 15px;
`;
const Price2 = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;

  text-align: center;
  font-feature-settings: "liga" off;

  color: rgba(255, 255, 255, 0.6);
`;
const Subtitle2 = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;

  text-align: center;

  color: #ffffff;
`;
const Img = styled.img`
  position: absolute;
  left: 0;
  top: 88px;
`;
const BlackSlide: React.FC<IProps> = () => {
  return (
    <Root>
      <Img src={finger} alt="pic" />
      <Question />
      <img src={regular} alt="regular" />
      <Price>15 EUR</Price>
      <Price2>or 18 USD</Price2>
      <Subtitle style={{ color: "#ffffff", padding: "20px", opacity: "0.7" }}>
        Share your work with the world.
      </Subtitle>
      <Subtitle2>YOU GET:</Subtitle2>
      <Subtitle
        style={{ color: "#ffffff", opacity: "0.7", paddingBottom: "20px" }}
      >
        • Post on one of the 4 channels <br />
        • Full credits to the creator <br />
        • Pay after work is selected <br />
      </Subtitle>
      <Button style={{ width: "250px" }} backgroundColor={"#55595F"}>
        Submit your work
      </Button>
    </Root>
  );
};
export default BlackSlide;

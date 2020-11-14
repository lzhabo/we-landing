import styled from "@emotion/styled";
import React from "react";
import pro from "../assets/pro.svg";
import koza from "../assets/koza2.svg";
import Subtitle from "@components/Subtitle";
import Button from "@components/Button";
import Question from "@components/Question";
import proLabel from "@src/assets/pro-label.svg";
import { jsx } from "@emotion/core";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 555px;
  position: relative;
  border-radius: 20px;

  background: linear-gradient(142.36deg, #d7b899 12.25%, #a87446 100%);
  margin: 20px 0;
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
  left: 213px;
  top: 70px;
`;
const BlackSlide: React.FC<IProps> = () => {
  return (
    <Root>
      <Question />
      <Img src={koza} alt="pic" />
      <img src={pro} alt="pro" />
      <Price>25 EUR</Price>
      <Price2>or 30 USD</Price2>
      <Subtitle style={{ color: "#ffffff", padding: "20px", opacity: "0.7" }}>
        Perfect for teams and professionals.
      </Subtitle>
      <Subtitle2>Regular + extra’s:</Subtitle2>
      <Subtitle
        style={{ color: "#ffffff", opacity: "0.7", paddingBottom: "20px" }}
      >
        + Tagged in post <br />
        + Branding included in post <br />
        + More screen real estate <br />
      </Subtitle>
      <Button
        style={{ width: "250px" }}
        backgroundColor="#FFFFFF"
        color="#17191B"
      >
        Submit your work
      </Button>
    </Root>
  );
};
export default BlackSlide;

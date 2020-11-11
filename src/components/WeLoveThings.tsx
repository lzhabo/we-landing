import styled from "@emotion/styled";
import React from "react";
import K180 from "../assets/180K.svg";
import K447 from "../assets/447K.svg";
import K539 from "../assets/539K.svg";
import K708 from "../assets/708K.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  height: 240px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  text-align: center;

  color: #6a7076;
`;
const Row = styled.div`
  //width: 285px;
  height: 50px;
  padding: 0 37px 0 37px;
`;
const WeLoveThings: React.FC<IProps> = () => {
  return (
    <Root>
      <Row>
        <Text>welovewebdesign</Text>
        <img src={K708} />
      </Row>
      <Row>
        <Text>welovebranding</Text>
        <img src={K539} />
      </Row>
      <Row>
        <Text>weloveillustration</Text>
        <img src={K447} />
      </Row>
      <Row>
        <Text>weloveanimations</Text>
        <img src={K180} />
      </Row>
    </Root>
  );
};
export default WeLoveThings;

import styled from "@emotion/styled";
import React from "react";
import Tag from "@components/Tag";

//todo love my little potato 💚

interface IProps {}

const Root = styled.div`
  display: flex;
  height: 240px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  @media (min-width: 1440px) {
    flex-direction: row;
  } ;
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
  height: 50px;
  padding: 0 37px 0 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -4px;
  & > * {
    margin: 0 4px;
  }
`;

const WeLoveThings: React.FC<IProps> = () => {
  return (
    <Root>
      <Row>
        <Text>welovewebdesign</Text>
        <Tag color="#FF3F4C">708K</Tag>
      </Row>
      <Row>
        <Text>welovebranding</Text>
        <Tag color="#30B490">539K</Tag>
      </Row>
      <Row>
        <Text>weloveillustration</Text>
        <Tag color="#F49229">447K</Tag>
      </Row>
      <Row>
        <Text>weloveanimations</Text>
        <Tag color="#5C52B5">180K</Tag>
      </Row>
    </Root>
  );
};

export default WeLoveThings;

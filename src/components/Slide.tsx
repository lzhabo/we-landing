import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";

interface IProps {
  description: string;
  pic: string;
  name: string;
  country: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 272px;

  flex-shrink: 0;
  box-sizing: border-box;
  background: #f3f5f6;
  border-radius: 20px;

  @media (min-width: 1440px) {
    width: 360px;
    height: 490px;
    padding: 40px;
  } ;
`;
const Subtitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  text-align: left;
  color: #6a7076;
  @media (min-width: 1440px) {
    font-size: 18px;
  } ;
`;

const Slide: React.FC<IProps> = ({ name, description, pic, country }) => {
  return (
    <Root>
      <Subtitle style={{ paddingBottom: 56 }}>{description}</Subtitle>
      <img src={pic} style={{ paddingBottom: 10 }} alt="user" />
      <Title style={{ fontSize: "21px", lineHeight: "30px" }}>{name}</Title>
      <Subtitle>{country}</Subtitle>
    </Root>
  );
};
export default Slide;

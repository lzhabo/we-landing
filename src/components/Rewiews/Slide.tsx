import styled from "@emotion/styled";
import React from "react";
import SizedBox from "@components/SizedBox";
import { jsx } from "@emotion/core";

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
  padding: 40px 0px 0px 40px;

  position: static;
  width: 360px;
  height: 490px;
  left: 380px;
  top: 0px;

  background: #f3f5f6;
  border-radius: 20px;
`;
const Description = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  color: #6a7076;
`;
const NameTitle = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 30px;

  font-feature-settings: "liga" off;

  color: #292c30;
`;

const Slide: React.FC<IProps> = ({ name, description, pic, country }) => {
  return (
    <Root>
      <Description>{description}</Description>
      <SizedBox height={150} />
      <img src={pic} />
      <NameTitle>{name}</NameTitle>
      <Description>{country}</Description>
    </Root>
  );
};
export default Slide;

import styled from "@emotion/styled";
import React from "react";

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
  padding: 40px;

  width: 272px;
  height: 444px;

  left: 380px;
  top: 0px;

  width: 272px;
  flex-shrink: 0;
  box-sizing: border-box;
  background: #f3f5f6;
  border-radius: 20px;
`;
const Description = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;

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
      <img src={pic} style={{ paddingBottom: 10 }} />
      <NameTitle>{name}</NameTitle>
      <Description>{country}</Description>
    </Root>
  );
};
export default Slide;

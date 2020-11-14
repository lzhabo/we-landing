import styled from "@emotion/styled";
import React from "react";
import member from "@src/assets/member.svg";
import Subtitle from "@components/Subtitle";

interface IProps {
  pic: string;
  description: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (min-width: 1440px) {
    padding: 30px;
  }
`;

const Benefit: React.FC<IProps> = ({ pic, description }) => {
  return (
    <Root>
      <img src={pic} alt="pic" style={{ paddingTop: 30 }} />
      <div style={{ padding: "10" }}>
        <Subtitle>{description}</Subtitle>
      </div>
    </Root>
  );
};
export default Benefit;
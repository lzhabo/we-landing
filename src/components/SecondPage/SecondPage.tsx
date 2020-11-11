import styled from "@emotion/styled";
import React from "react";
import comment from "../../assets/comment.svg";
import like from "../../assets/like.svg";
import member from "../../assets/member.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;

  text-align: center;
  font-feature-settings: "liga" off;

  color: #292c30;
  padding: 0 42px 0 42px;
`;
const Why = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: rgba(41, 44, 48, 0.4);
`;

const SubTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;

  text-align: center;

  color: #6a7076;
`;
const SecondPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Why>Why</Why>
      <Title>The benefits of sharing</Title>
      <img src={comment} />
      <SubTitle>
        Share your work with designers <br />
         all over the world.
      </SubTitle>
      <img src={like} />
      <SubTitle>
        Inspire yourself and others <br /> with your designs.
      </SubTitle>
      <img src={member} />
      <SubTitle>
        Grow your follower base <br />
        and reach potential clients.
      </SubTitle>
    </Root>
  );
};
export default SecondPage;

import styled from "@emotion/styled";
import React from "react";
import comment from "../../assets/comment.svg";
import like from "../../assets/like.svg";
import member from "../../assets/member.svg";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import Subtitle2 from "@components/Subtitle2";
interface IProps {}

//todo love my little potato 💚

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 50px 0;
`;
const Img = styled.img`
  padding-top: 30px;
`;
const Benefits: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle2>Why</Subtitle2>
      <Title>The benefits of sharing</Title>
      <Img src={comment} />
      <Subtitle>
        Share your work with designers <br />
         all over the world.
      </Subtitle>
      <Img src={like} />
      <Subtitle>
        Inspire yourself and others <br /> with your designs.
      </Subtitle>
      <Img src={member} />
      <Subtitle>
        Grow your follower base <br />
        and reach potential clients.
      </Subtitle>
    </Root>
  );
};
export default Benefits;

import styled from "@emotion/styled";
import React from "react";
import comment from "../../assets/comment.svg";
import like from "../../assets/like.svg";
import member from "../../assets/member.svg";
import Title from "@components/Title";
import Subtitle2 from "@components/Subtitle2";
import Benefit from "@components/Benefit";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 50px 0;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  } ;
`;
const benefitsData = [
  {
    pic: comment,
    description: "Share your work with designers <br/>all over the world.",
  },
  {
    pic: like,
    description: "Inspire yourself and others <br/> with your designs.",
  },
  {
    pic: member,
    description: `Grow your follower base <br/> and reach potential clients.`,
  },
];

const Benefits: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle2>Why</Subtitle2>
      <Title>The benefits of sharing</Title>
      <Wrap>
        {benefitsData.map((benefit, index) => (
          <Benefit {...benefit} key={index} />
        ))}
      </Wrap>
    </Root>
  );
};
export default Benefits;

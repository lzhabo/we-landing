import styled from "@emotion/styled";
import React from "react";
import Slide from "@components/Slide";
import carla from "../../assets/carla.svg";
import rebombo from "../../assets/rebombo.svg";
import unifikat from "../../assets/unifikat.svg";
import Title from "@components/Title";
import Subtitle2 from "@components/Subtitle2";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 50px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  display: flex;
  max-width: 100vw;
  & > * {
    margin: 0 10px;
  }
  & > :first-of-type {
    margin-left: 24px;
  }
  & > :last-child {
    margin-right: 24px;
  }
`;

const slidesData = [
  {
    description:
      "I use @weloveillistration to promote my illustrations since 2018 and im really happy with the impact. The majority of my clients have noticed my work via their instagram account. And that’s a perfect way to see others work and get inspired.",
    pic: carla,
    name: "Carla Orozco",
    country: "Illustrator, Switzerland 🇨🇭",
  },
  {
    description:
      "We decided to promote our work on @weloveillustration to get real followers who would be interested in our work. What a surprise to see how in one day you can give our Instagram a big boost and get such good feedback.",
    pic: rebombo,
    name: "Rebombo estudio S.L.",
    country: "Creative Studio, Spain 🇪🇸",
  },
  {
    description:
      "We decided to promote our work on @weloveillustration to get real followers who would be interested in our work. What a surprise to see how in one day you can give our Instagram a big boost and get such good feedback.",
    pic: unifikat,
    name: "Unifikat Design Studio",
    country: "Brand Design Studio, Poland 🇵🇱",
  },
];

const Reviews: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle2 style={{ color: "#a9abac" }}>REVIEWS</Subtitle2>
      <Title style={{ paddingBottom: "30px" }}>Experience of creatives</Title>
      <ScrollContainer>
        {slidesData.map((slide, index) => (
          <Slide {...slide} key={index} />
        ))}
      </ScrollContainer>
    </Root>
  );
};
export default Reviews;

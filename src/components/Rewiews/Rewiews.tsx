import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "@components/FlexContaner";
import Slide from "./Slide";
import carla from "../../assets/carla.svg";
import rebombo from "../../assets/rebombo.svg";
import unifikat from "../../assets/unifikat.svg";

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
`;
const SubTitle = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: rgba(41, 44, 48, 0.4);
  padding-top: 60px;
`;
const ScrollContainer = styled.div`
  overflow-y: auto;
`;

const Rewiews: React.FC<IProps> = () => {
  return (
    <Root>
      <SubTitle>REVIEWS</SubTitle>
      <Title>Experience of creatives</Title>
      <ScrollContainer>
        <Slide
          description={
            "I use @weloveillistration to promote my illustrations since 2018 and im really happy with the impact. The majority of my clients have noticed my work via their instagram account. And that’s a perfect way to see others work and get inspired."
          }
          pic={carla}
          name={"Carla Orozco"}
          country={"Illustrator, Switzerland 🇨🇭"}
        />
        <Slide
          description={
            "We decided to promote our work on @weloveillustration to get real followers who would be interested in our work. What a surprise to see how in one day you can give our Instagram a big boost and get such good feedback."
          }
          pic={rebombo}
          name={"Rebombo estudio S.L."}
          country={"Creative Studio, Spain 🇪🇸"}
        />
        <Slide
          description={
            "We decided to promote our work on @weloveillustration to get real followers who would be interested in our work. What a surprise to see how in one day you can give our Instagram a big boost and get such good feedback."
          }
          pic={unifikat}
          name={"Unifikat Design Studio"}
          country={"Brand Design Studio, Poland 🇵🇱"}
        />
      </ScrollContainer>
    </Root>
  );
};
export default Rewiews;

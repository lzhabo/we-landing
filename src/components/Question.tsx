import styled from "@emotion/styled";
import React from "react";
import question from "../assets/question.svg";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 20px;
  top: 30px;
  right: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  opacity: 70;
  //background: rgba(41, 44, 48, 0.2);
  background: #55595f;
  position: absolute;
  cursor: pointer;
`;

const Question: React.FC = () => {
  return (
    <Root>
      <img style={{ paddingLeft: 1 }} src={question} alt="question" />
    </Root>
  );
};
export default Question;

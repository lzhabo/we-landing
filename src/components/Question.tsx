import styled from "@emotion/styled";
import React from "react";
import question from "../assets/question.svg";
interface IProps {
  backgroundColor?: string;
}

const Root = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  opacity: 70;
  background: ${({ backgroundColor }) => backgroundColor ?? "#55595F"};
  position: absolute;
`;

const Question: React.FC<IProps> = () => {
  return (
    <Root>
      <img src={question} />
    </Root>
  );
};
export default Question;

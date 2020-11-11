import styled from "@emotion/styled";
import React from "react";
import plus from "@src/assets/plus.svg";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;
const Text = styled.text`
  font-family: Gilroy;
  font-style: normal;
  //font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  padding-right: 8px;
  text-align: center;

  color: #0071ff;
`;

const SubmitButton: React.FC<IProps> = ({ ...props }) => {
  return (
    <Root {...props}>
      <Text>Submit</Text>
      <img src={plus} alt={"btn"} />
    </Root>
  );
};
export default SubmitButton;

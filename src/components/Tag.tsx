import styled from "@emotion/styled";
import React from "react";

interface IProps {
  color: string;
}

const Root = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};

  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 10px;
`;

const Tag: React.FC<IProps> = ({ color, children }) => {
  return <Root color={color}>{children}</Root>;
};
export default Tag;

import styled from "@emotion/styled";

interface IProps {
  color?: string;
  backgroundColor?: string;
}

const Button = styled.div<IProps>`
  padding: 20px 0;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor ?? "#0071ff"};
  color: ${({ color }) => color ?? "#fff"};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;

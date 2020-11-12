import styled from "@emotion/styled";

interface IProps {
  color?: string;
  backgroundColor?: string;
}

const Button = styled.div<IProps>`
  padding: 10px 20px;
  width: 315px;
  background: ${({ backgroundColor }) => backgroundColor ?? "#0071ff"};
  color: ${({ color }) => color ?? "#fff"};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.02em;
`;

export default Button;

import styled from "styled-components";
import { rotate } from "../theme/animation";

export const ValidateWrap = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
`;
export const ValidateInputWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
`;

export const ValidateButtonWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 20%;
`;

export const LoadingWrap = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 10px;
  right: -30px;
  animation: ${rotate({ from: 0, to: 360 })} 3s linear infinite;
`;

export const ValidateComment = styled.sub`
  color: red;
`;

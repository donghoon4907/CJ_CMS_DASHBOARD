import styled from "styled-components";
import { steam } from "../theme/animation";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Wrap = styled.div`
  width: 500px;
  height: auto;
  border: 1px solid lightgray;
  border-radius: 5%;
  padding: 20px;
  box-sizing: border-box;
  background: #f8f9fa;
`;

export const Title = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
`;

export const HelpBar = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding: 3px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
`;

export const LoadingWrap = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  &:before,
  &:after {
    display: ${props => (props.loading === 1 ? "block" : "none")};
    content: "";
    position: absolute;
    border-radius: 5px;
    left: -2px;
    top: -2px;
    background: linear-gradient(45deg, white, #5857ff);
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: 1;
    animation: ${steam()} 5s linear infinite;
  }
`;

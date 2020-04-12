import React from "react";
import styled from "styled-components";
import { Loading } from "../assets/icons";
import { rotate } from "../theme/animation";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.menuBgColor};
`;
const LoadingWrap = styled.div`
  animation: ${rotate({ from: 0, to: 360 })} 3s linear infinite;
`;

const LoadingComponent = () => (
  <Container>
    <LoadingWrap>
      <Loading
        style={{
          width: 50,
          height: 50,
          fill: "#3EA9F1"
        }}
      />
    </LoadingWrap>
  </Container>
);

export default LoadingComponent;

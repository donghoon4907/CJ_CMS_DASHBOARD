import React from "react";
import styled from "styled-components";

const Container = styled.iframe`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

const VideoEditComponent = () => {
  return <Container></Container> /* like this */;
};

export default VideoEditComponent;

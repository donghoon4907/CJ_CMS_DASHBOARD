import styled from "styled-components";
import logo from "../assets/img/logo.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: white;
`;
export const AsideMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width}px;
  height: 100vh;
  background: ${(props) => props.theme.menuBgColor};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  z-index: 1;
`;
export const Logo = styled.div`
  width: 130px;
  height: 90px;
  background: url(${logo}) center center no-repeat;
  background-size: cover;
  cursor: pointer;
`;
export const ContentMenu = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.width}px;
  width: calc(100vw - ${(props) => props.width}px);
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  padding-right: 80px;
  box-sizing: border-box;
  background: ${(props) => props.theme.menuBgColor};
  z-index: 0;
`;
export const IconWrap = styled.div`
  width: ${(props) => props.width}px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.active === 1 && "#3ea9f1"};
  ${(props) => props.isProfile === 1 && `position: fixed;bottom: 0;`}
`;

export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 40px;
  width: 500px;
`;

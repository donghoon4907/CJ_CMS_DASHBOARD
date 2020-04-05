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
  width: 250px;
  height: 100vh;
  border-right: 1px solid black;
  background: ${props => props.theme.menuBgColor};
  z-index: 1;
`;
export const LogoWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  z-index: 1;
`;
export const Logo = styled.div`
  width: 130px;
  height: 90px;
  background: url(${logo}) center center no-repeat;
  background-size: cover;
  cursor: pointer;
`;
export const SearchWrap = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;
export const GnbWrap = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
`;
export const ContentMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-left: 250px;
  box-sizing: border-box;
  z-index: 0;
`;
export const GnbItem = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;
export const GnbItemIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GnbItemText = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  width: calc(100%-50px);
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 24px;
  padding-left: 10px;
  color: white;
`;

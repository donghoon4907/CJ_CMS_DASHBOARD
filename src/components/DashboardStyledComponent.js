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

export const TitleWrap = styled.div`
  color: white;
  font-weight: 500;
  font-size: 40px;
  width: ${(props) => window.screen.width - props.width - 100}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 30px;
`;

export const Article = styled.article`
  width: ${(props) => window.screen.width - props.width - 100}px;
  height: 80vh;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  padding-right: 80px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;
  background: ${(props) => props.theme.menuInnerBgColor};
`;

export const CardWrap = styled.div`
  width: ${(props) => (window.screen.width - props.width - 400) / 5}px;
  height: 240px;
  overflow: hidden;
  position: relative;
  border: 1px solid white;
  margin-right: 30px;
  margin-bottom: 30px;

  & ~ & {
    margin-right: 30px;
    margin-bottom: 30px;
  }

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardItem = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  width: 100%;
  border: 1px solid white;
`;

export const CardHeader = styled(CardItem)`
  justify-content: space-between;
  top: 0;
  height: 30px;
  padding-right: 5px;
  padding-left: 5px;
`;
export const CardThumbnail = styled(CardItem)`
  top: 30px;
  height: 120px;
`;
export const CardBody = styled(CardItem)`
  top: 150px;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  padding-left: 5px;
`;
export const CardFooter = styled(CardItem)`
  top: 210px;
  height: 30px;
  padding-right: 5px;
  padding-left: 5px;
`;
export const EllipsisText = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 30px;
`;

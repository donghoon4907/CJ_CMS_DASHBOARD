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
  width: ${props => props.theme.asideMenuWidth}px;
  height: 100vh;
  background: ${props => props.theme.menuBgColor};
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
  left: ${props => props.theme.asideMenuWidth}px;
  width: calc(100vw - ${props => props.theme.asideMenuWidth}px);
  height: 100vh;
  background: ${props => props.theme.contentBgColor};
  overflow-y: hidden;
  z-index: 0;
  color: white;
`;
export const IconWrap = styled.div`
  width: ${props => props.theme.asideMenuWidth}px;
  height: ${props => props.theme.asideMenuWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active === 1 && props.theme.menuFontColor};
  ${props => props.isProfile === 1 && `position: fixed;bottom: 0;`}
`;
export const TopMenu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: ${props => props.theme.asideMenuWidth}px;
  width: ${props => window.screen.width - props.theme.asideMenuWidth}px;
  height: 50px;
  border-bottom: 1px solid #20242b;
`;

export const Article = styled.article`
  width: ${props => window.screen.width - props.width - 150}px;
  height: ${window.innerHeight - 200}px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  padding-right: 80px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.cardBorderColor};
  color: white;
`;

export const CardWrap = styled.div`
  width: ${props => (window.screen.width - props.width - 400) / 5}px;
  height: 240px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${props => props.theme.cardBorderColor};
  margin-right: 30px;
  margin-bottom: 30px;
  font-size: 12px;

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
  border-bottom: 1px solid ${props => props.theme.cardBorderColor};
  overflow: hidden;
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
  padding: 5px;
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

export const SettingRow = styled.div`
  width: ${props => (window.screen.width - props.width - 400) / 3}px;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 5px;
  color: white;
  font-size: 12px;
  background: ${props => props.theme.menuInnerBgColor};

  & ~ & {
    margin-right: 30px;
    margin-bottom: 30px;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

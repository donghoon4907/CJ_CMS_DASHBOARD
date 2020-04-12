import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 130px;
`;

export const SubMenu = styled.div`
  position: fixed;
  display: flex;
  top: 50px;
  left: ${props => props.theme.asideMenuWidth}px;
  width: ${props => window.screen.width - props.theme.asideMenuWidth}px;
  height: 50px;
  border-bottom: 1px solid #20242b;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
`;
export const SubMenuItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  background-color: ${props => props.active === 1 && props.theme.menuFontColor};
  cursor: pointer;
`;
export const Article = styled.div`
  position: fixed;
  padding: 10px;
  box-sizing: border-box;
  top: 100px;
  left: ${props => props.theme.asideMenuWidth}px;
  width: ${props => window.screen.width - props.theme.asideMenuWidth}px;
  height: calc(100vh - 100px);
`;
export const WorkWrap = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
export const SearchBar = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Field = styled.div`
  flex: ${props => props.flex};
  display: flex;
  justify-content: start;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ListWrap = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;
`;

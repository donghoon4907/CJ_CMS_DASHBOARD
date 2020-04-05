import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  AsideMenu,
  LogoWrap,
  Logo,
  SearchWrap,
  GnbWrap,
  GnbItem,
  GnbItemIcon,
  GnbItemText,
  ContentMenu
} from "./DashboardStyledComponent";
import { Search, Home } from "../assets/icons";

const DashboardPresentation = ({ onLogout }) => (
  <Container>
    <AsideMenu>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <SearchWrap>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="검색어를 입력하세요."
          />
          <div className="input-group-append">
            <span className="input-group-text" style={{ cursor: "pointer" }}>
              <Search width={24} height={24} fill={"#292f38"} />
            </span>
          </div>
        </div>
      </SearchWrap>
      <GnbWrap>
        <GnbItem>
          <GnbItemIcon>
            <Home width={24} height={24} fill={"#3EA9F1"} />
          </GnbItemIcon>
          <GnbItemText>홈</GnbItemText>
        </GnbItem>
        <GnbItem>
          <GnbItemIcon>
            <Home width={24} height={24} fill={"#3EA9F1"} />
          </GnbItemIcon>
          <GnbItemText>홈</GnbItemText>
        </GnbItem>
      </GnbWrap>
    </AsideMenu>
    <ContentMenu></ContentMenu>
  </Container>
);

export default DashboardPresentation;

DashboardPresentation.propTypes = {
  onLogout: PropTypes.func.isRequired
};

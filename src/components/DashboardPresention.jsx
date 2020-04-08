import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Container,
  AsideMenu,
  ContentMenu,
  IconWrap,
  Title
} from "./DashboardStyledComponent";
import { Search, Home, Setting } from "../assets/icons";
import Chart from "./LineChart";

const data = [
  {
    name: "04-07",
    request: 4000
  },
  {
    name: "04-08",
    request: 3000
  },
  {
    name: "04-09",
    request: 2000
  },
  {
    name: "04-10",
    request: 2780
  },
  {
    name: "04-11",
    request: 1890
  },
  {
    name: "04-12",
    request: 2390
  },
  {
    name: "04-13",
    request: 3490
  }
];
const DashboardPresentation = ({
  userInfo,
  activeMenu,
  onClickMenuIcon,
  onLogout,
  asideWidth
}) => (
  <Container>
    <AsideMenu width={asideWidth}>
      <IconWrap
        active={activeMenu === 1 ? 1 : 0}
        width={asideWidth}
        onClick={() => onClickMenuIcon(1)}
      >
        <Home style={{ width: 24, height: 24, fill: "white" }} />
      </IconWrap>
      <IconWrap
        active={activeMenu === 2 ? 1 : 0}
        width={asideWidth}
        onClick={() => onClickMenuIcon(2)}
      >
        <Setting style={{ width: 24, height: 24, fill: "white" }} />
      </IconWrap>
      <IconWrap isProfile={1} width={asideWidth}>
        <img
          src={`${process.env.REACT_APP_BACKEND_HOST}/images/${
            userInfo && userInfo.thumbnail
          }`}
          width={50}
          height={50}
          style={{ borderRadius: "50%", border: "2px solid lightgray" }}
          alt={"thumbnail"}
        />
      </IconWrap>
    </AsideMenu>
    <ContentMenu width={asideWidth}>
      {activeMenu === 1 && (
        <Fragment>
          <Title>Server Activity</Title>
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              color: "white",
              marginTop: 50
            }}
          >
            <Chart width={500} legendTitle={"request"} data={data} />
            <Chart width={500} legendTitle={"request"} data={data} />
          </div>
        </Fragment>
      )}
      {activeMenu === 2 && <Title>Setting</Title>}
    </ContentMenu>
  </Container>
);

export default DashboardPresentation;

DashboardPresentation.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }),
  activeMenu: PropTypes.number.isRequired,
  onClickMenuIcon: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

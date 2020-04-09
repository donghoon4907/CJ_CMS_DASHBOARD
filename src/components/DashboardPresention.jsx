import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Container,
  AsideMenu,
  ContentMenu,
  IconWrap,
  TitleWrap,
  Article,
  CardWrap,
  CardHeader,
  CardThumbnail,
  CardBody,
  CardFooter,
  EllipsisText
} from "./DashboardStyledComponent";
import {
  Post,
  Home,
  Setting,
  FillHeart,
  EmptyHeart,
  Add
} from "../assets/icons";
import CreatePostModal from "./CreatePostModalContainer";
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
  onClickAddBtn,
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
        <Post style={{ width: 24, height: 24, fill: "white" }} />
      </IconWrap>
      <IconWrap
        active={activeMenu === 3 ? 1 : 0}
        width={asideWidth}
        onClick={() => onClickMenuIcon(3)}
      >
        <Setting style={{ width: 24, height: 24, fill: "white" }} />
      </IconWrap>
      <IconWrap isProfile={1} width={asideWidth}>
        <img
          src={`${process.env.REACT_APP_BACKEND_HOST}/images/${
            userInfo
              ? userInfo.thumbnail
              : process.env.REACT_APP_DEFAULT_THUMBNAIL
          }`}
          width={50}
          height={50}
          style={{
            borderRadius: "50%",
            border: "2px solid lightgray"
          }}
          alt={"thumbnail"}
        />
      </IconWrap>
    </AsideMenu>
    <ContentMenu width={asideWidth}>
      {activeMenu === 1 && (
        <Fragment>
          <TitleWrap>
            <div>Server Activity</div>
            <div />
          </TitleWrap>
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
      {activeMenu === 2 && (
        <Fragment>
          <TitleWrap width={asideWidth}>
            <div>Posting</div>
            <div>
              <Add
                style={{ width: 50, height: 50, fill: "white" }}
                onClick={onClickAddBtn}
              />
            </div>
          </TitleWrap>
          <Article width={asideWidth}>
            {/* <CardWrap width={asideWidth}>
              <CardHeader>
                <EmptyHeart style={{ width: 15, height: 15, fill: "white" }} />
                <div style={{ color: "white" }}>2012-05-23</div>
              </CardHeader>
              <CardThumbnail>
                <img
                  src={`${process.env.REACT_APP_BACKEND_HOST}/images/${process.env.REACT_APP_DEFAULT_THUMBNAIL}`}
                  width={"100%"}
                  height={120}
                  alt={"thumbnail"}
                />
              </CardThumbnail>
              <CardBody>
                <EllipsisText></EllipsisText>
                <EllipsisText></EllipsisText>
              </CardBody>
              <CardFooter>test</CardFooter>
            </CardWrap> */}
          </Article>
        </Fragment>
      )}
      {activeMenu === 3 && (
        <TitleWrap>
          <div>Setting</div>
          <div />
        </TitleWrap>
      )}
    </ContentMenu>
    <CreatePostModal />
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
  onClickAddBtn: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

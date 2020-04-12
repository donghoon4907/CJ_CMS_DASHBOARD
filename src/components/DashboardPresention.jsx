import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import {
  Container,
  AsideMenu,
  ContentMenu,
  IconWrap,
  TopMenu
} from "./DashboardStyledComponent";
import { Publish, Home, Setting } from "../assets/icons";
import CreatePostModal from "./CreatePostModalContainer";
import CreateProgramModal from "./CreateProgramModalContainer";
import PublishContainer from "./PublishContainer";
// import Chart from "./LineChart";

const DashboardPresentation = ({
  userInfo,
  activeMenu,
  isShowCreatePostModal,
  isShowCreateProgramModal,
  onClickMenuIcon,
  onLogout
}) => (
  <Container>
    <AsideMenu>
      <IconWrap
        active={activeMenu === 1 && 1}
        onClick={() => onClickMenuIcon(1)}
      >
        <Home style={{ width: 18, height: 18, fill: "white" }} />
      </IconWrap>
      <IconWrap
        active={activeMenu === 2 && 1}
        onClick={() => onClickMenuIcon(2)}
      >
        <Publish style={{ width: 18, height: 18, fill: "white" }} />
      </IconWrap>
      <IconWrap
        active={activeMenu === 3 && 1}
        onClick={() => onClickMenuIcon(3)}
      >
        <Setting style={{ width: 18, height: 18, fill: "white" }} />
      </IconWrap>
      <IconWrap isProfile={1}>
        <img
          src={`${process.env.REACT_APP_BACKEND_HOST}/images/${
            userInfo && userInfo.Images.length > 0
              ? userInfo.Images[0].src
              : process.env.REACT_APP_DEFAULT_THUMBNAIL
          }`}
          width={30}
          height={30}
          style={{
            borderRadius: "50%",
            border: "2px solid gray"
          }}
          alt={"thumbnail"}
        />
      </IconWrap>
    </AsideMenu>
    <ContentMenu>
      <TopMenu>
        <div style={{ paddingLeft: 20 }}>
          {/* <InputGroup>
            <FormControl placeholder="검색어를 입력하세요." />
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5
                }}
              >
                <Search style={{ width: 15, height: 15, cursor: "pointer" }} />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup> */}
        </div>
        <div style={{ paddingRight: 20 }}>
          <Button style={{ background: "#3EA9F1" }} onClick={onLogout}>
            로그아웃
          </Button>
        </div>
      </TopMenu>
      {activeMenu === 2 && <PublishContainer />}
      {/* {activeMenu === 3 && (
        <Fragment>
          <TitleWrap>
            <div>Setting</div>
            <div />
          </TitleWrap>
          <Article>
            <SettingRow>
              <h3 style={{ textAlign: "center" }}>프로그램 관리</h3>
            </SettingRow>
            <SettingRow>
              <h3 style={{ textAlign: "center" }}>컨텐츠 관리</h3>
            </SettingRow>
            <SettingRow>
              <h3 style={{ textAlign: "center" }}>포스트 관리</h3>
            </SettingRow>
          </Article>
        </Fragment>
      )} */}
    </ContentMenu>
    {isShowCreatePostModal && <CreatePostModal />}
    {isShowCreateProgramModal && <CreateProgramModal />}
  </Container>
);

export default DashboardPresentation;

DashboardPresentation.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    Images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired
      })
    )
  }),
  activeMenu: PropTypes.number.isRequired,
  isShowCreatePostModal: PropTypes.bool.isRequired,
  isShowCreateProgramModal: PropTypes.bool.isRequired,
  onClickMenuIcon: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

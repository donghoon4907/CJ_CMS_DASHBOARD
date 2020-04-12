import React from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import {
  SubMenu,
  SubMenuItem,
  Article,
  WorkWrap,
  SearchBar,
  Field,
  ListWrap,
  StyledDatePicker
} from "./PublishStyledComponent";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: #3ea9f1;
`;

const PublishPresentaion = ({
  loadedPost,
  loadedProgram,
  activeMenu,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onClickSubMenuItem,
  onClickAddPostBtn,
  onClickAddProgramBtn
}) => (
  <>
    <SubMenu>
      <SubMenuItem
        active={activeMenu === 1 && 1}
        onClick={() => onClickSubMenuItem(1)}
      >
        <span>프로그램</span>
      </SubMenuItem>
      <SubMenuItem
        active={activeMenu === 2 && 1}
        onClick={() => onClickSubMenuItem(2)}
      >
        <span>포스트</span>
      </SubMenuItem>
    </SubMenu>
    <Article>
      <WorkWrap>
        <SearchBar>
          <Field flex={3}>
            <div className="mr-3 d-flex align-items-center">등록일</div>
            <div>
              <StyledDatePicker
                className="form-control"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                isClearable
                startDate={startDate}
                endDate={endDate}
                placeholderText="입력하세요."
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="d-flex align-items-center ml-2 mr-2">~</div>
            <div>
              <StyledDatePicker
                className="form-control"
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                isClearable
                startDate={startDate}
                endDate={endDate}
                placeholderText="입력하세요."
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </Field>
          <Field flex={1}>
            <InputGroup>
              <FormControl placeholder="검색어를 입력하세요." />
              <InputGroup.Prepend>
                <InputGroup.Text
                  style={{
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                  }}
                >
                  검색
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Field>
        </SearchBar>
        <SearchBar>
          <Field flex={8}>
            {activeMenu === 1 && (
              <StyledButton onClick={onClickAddProgramBtn}>
                프로그램 등록
              </StyledButton>
            )}
            {activeMenu === 2 && (
              <StyledButton onClick={onClickAddPostBtn}>
                프스트 등록
              </StyledButton>
            )}
          </Field>
          <Field flex={1}>
            <Form.Control as="select">
              <option selected>등록일 순</option>
              <option>등록일 역순</option>
              <option>수정일 순</option>
              <option>수정일 역순</option>
            </Form.Control>
          </Field>
        </SearchBar>
        <ListWrap className="p-3"></ListWrap>
      </WorkWrap>
    </Article>
  </>
);
export default PublishPresentaion;

PublishPresentaion.propTypes = {
  loadedPost: PropTypes.arrayOf(PropTypes.shape({})),
  // loadedProgram,
  activeMenu: PropTypes.number.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  onClickSubMenuItem: PropTypes.func.isRequired,
  onClickAddPostBtn: PropTypes.func.isRequired,
  onClickAddProgramBtn: PropTypes.func.isRequired
};

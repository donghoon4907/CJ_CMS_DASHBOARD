import React from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import {
  SubMenu,
  SubMenuItem,
  Article,
  WorkWrap,
  SearchBar,
  Field,
  ListWrap,
  StyledDatePicker,
  StyledButton,
  CardWrap,
  CardHeader,
  CardThumbnail,
  CardBody,
  CardFooter,
  EllipsisText
} from "./PublishStyledComponent";
import EmptyComponent from "./EmptyComponent";
import LoadingComponent from "./LoadingComponent";
import ArticleComponent from "./ArticleComponent";

const PublishPresentaion = ({
  isLoadingPgm,
  isLoadingContent,
  isLoadingPost,
  loadedProgram,
  loadedContent,
  loadedPost,
  loadedChannel,
  activeMenu,
  pgmStartDate,
  contentStartDate,
  postStartDate,
  pgmEndDate,
  contentEndDate,
  postEndDate,
  setPgmStartDate,
  setContentStartDate,
  setPostStartDate,
  setPgmEndDate,
  setContentEndDate,
  setPostEndDate,
  pgmSearchKeyword,
  contentSearchKeyword,
  postSearchKeyword,
  pgmSort,
  contentSort,
  postSort,
  pgmChannel,
  onChangePgmSearchKeyword,
  onChangeContentSearchKeyword,
  onChangePostSearchKeyword,
  onChangePgmSort,
  onChangeContentSort,
  onChangePostSort,
  onChangePgmChannel,
  onClickSubMenuItem,
  onClickAddProgramBtn,
  onClickAddContentBtn,
  onClickAddPostBtn,
  onClickPgmItem,
  onClickContentItem,
  onClickPostItem,
  onKeyDownPgmSearchKeyword,
  onKeyDownContentSearchKeyword,
  onKeyDownPostSearchKeyword,
  onClickPgmSearchBtn,
  onClickContentSearchBtn,
  onClickPostSearchBtn,
  onScrollInPgmList,
  onScrollInContentList,
  onScrollInPostList
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
        <span>컨텐츠</span>
      </SubMenuItem>
      <SubMenuItem
        active={activeMenu === 3 && 1}
        onClick={() => onClickSubMenuItem(3)}
      >
        <span>포스트</span>
      </SubMenuItem>
    </SubMenu>
    <Article>
      <ArticleComponent
        type={"프로그램"}
        isActive={activeMenu === 1}
        isLoadingData={isLoadingPgm}
        loadedData={loadedProgram}
        loadedChannel={loadedChannel}
        startDate={pgmStartDate}
        endDate={pgmEndDate}
        setStartDate={setPgmStartDate}
        setEndDate={setPgmEndDate}
        searchKeyword={pgmSearchKeyword}
        sort={pgmSort}
        channel={pgmChannel}
        onChangeSearchKeyword={onChangePgmSearchKeyword}
        onChangeSort={onChangePgmSort}
        onChangeChannel={onChangePgmChannel}
        onClickAddBtn={onClickAddProgramBtn}
        onClickItem={onClickPgmItem}
        onKeyDownSearchKeyword={onKeyDownPgmSearchKeyword}
        onClickSearchBtn={onClickPgmSearchBtn}
        onScrollInList={onScrollInPgmList}
      />
      {/* <ArticleComponent
        type={"콘텐츠"}
        isActive={activeMenu === 2}
        isLoadingData={isLoadingContent}
        loadedData={loadedContent}
        startDate={contentStartDate}
        endDate={contentEndDate}
        setStartDate={setContentStartDate}
        setEndDate={setContentEndDate}
        searchKeyword={contentSearchKeyword}
        sort={contentSort}
        onChangeSearchKeyword={onChangeContentSearchKeyword}
        onChangeSort={onChangeContentSort}
        onClickAddBtn={onClickAddContentBtn}
        onClickItem={onClickContentItem}
        onKeyDownSearchKeyword={onKeyDownContentSearchKeyword}
        onClickSearchBtn={onClickContentSearchBtn}
        onScrollInList={onScrollInContentList}
      />
      <ArticleComponent
        type={"포스트"}
        isActive={activeMenu === 3}
        isLoadingData={isLoadingPost}
        loadedData={loadedPost}
        startDate={postStartDate}
        endDate={postEndDate}
        setStartDate={setPostStartDate}
        setEndDate={setPostEndDate}
        searchKeyword={postSearchKeyword}
        sort={postSort}
        onChangeSearchKeyword={onChangePostSearchKeyword}
        onChangeSort={onChangePostSort}
        onClickAddBtn={onClickAddPostBtn}
        onClickItem={onClickPostItem}
        onKeyDownSearchKeyword={onKeyDownPostSearchKeyword}
        onClickSearchBtn={onClickPostSearchBtn}
        onScrollInList={onScrollInPostList}
      /> */}

      <WorkWrap active={activeMenu === 1 && 1}>
        <SearchBar>
          <Field flex={3}>
            <div className="mr-3 d-flex align-items-center">등록일</div>
            <div>
              <StyledDatePicker
                className="form-control"
                selected={pgmStartDate}
                onChange={(date) => setPgmStartDate(date)}
                selectsStart
                isClearable
                startDate={pgmStartDate}
                endDate={pgmEndDate}
                placeholderText="입력하세요."
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="d-flex align-items-center ml-2 mr-2">~</div>
            <div>
              <StyledDatePicker
                className="form-control"
                selected={pgmEndDate}
                onChange={(date) => setPgmEndDate(date)}
                selectsEnd
                isClearable
                startDate={pgmStartDate}
                endDate={pgmEndDate}
                placeholderText="입력하세요."
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </Field>
          <Field flex={1}>
            <InputGroup>
              <FormControl
                placeholder="검색어를 입력하세요."
                value={pgmSearchKeyword}
                onChange={onChangePgmSearchKeyword}
                onKeyDown={onKeyDownPgmSearchKeyword}
                disabled={isLoadingPgm}
              />
              <InputGroup.Prepend>
                <InputGroup.Text
                  style={{
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                  }}
                >
                  <span onClick={onClickPgmSearchBtn}>검색</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Field>
        </SearchBar>
        <SearchBar>
          <Field flex={3}>
            <StyledButton onClick={onClickAddProgramBtn}>
              프로그램 등록
            </StyledButton>
          </Field>
          <Field flex={1}>
            <Form.Control
              as="select"
              value={pgmChannel}
              onChange={onChangePgmChannel}
              placeholder={"채널을 선택하세요."}
            >
              <option value="">채널 선택</option>
              {loadedChannel &&
                loadedChannel.map(({ id, name }, idx) => {
                  return (
                    <option value={id} key={idx}>
                      {name}
                    </option>
                  );
                })}
            </Form.Control>
            <Form.Control
              as="select"
              value={pgmSort}
              onChange={onChangePgmSort}
            >
              <option value="createdAt,DESC">등록일 순</option>
              <option value="createdAt,ASC">등록일 역순</option>
              <option value="updatedAt,DESC">수정일 순</option>
              <option value="updatedAt,ASC">수정일 역순</option>
            </Form.Control>
          </Field>
        </SearchBar>
        <ListWrap className="p-3" onScroll={onScrollInPgmList}>
          {loadedProgram && loadedProgram.length > 0 ? (
            loadedProgram.map((program) => {
              const {
                id,
                title,
                description,
                createdAt,
                Images,
                Channel,
                Contents,
                Genre,
                DetailGenre
              } = program;
              return (
                <CardWrap key={id}>
                  <CardHeader>
                    <div>
                      <img
                        width={50}
                        height={20}
                        src={`${process.env.REACT_APP_BACKEND_HOST}/images/${Channel.Images[0].src}`}
                        alt={"logo"}
                      />
                    </div>
                    <div title={createdAt}>{createdAt.substring(0, 10)}</div>
                  </CardHeader>
                  <CardThumbnail>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_HOST}/images/${Images[0].src}`}
                      width={"100%"}
                      height={"100%"}
                      alt={"thumbnail"}
                    />
                  </CardThumbnail>
                  <CardBody>
                    <EllipsisText onClick={() => onClickPgmItem(program)}>
                      {title}
                    </EllipsisText>
                    <EllipsisText onClick={() => onClickPgmItem(program)}>
                      {description}
                    </EllipsisText>
                  </CardBody>
                  <CardFooter>
                    <div>
                      {Genre.name}, {DetailGenre.name}
                    </div>
                    <div>
                      {Contents.length === 0 ? "예정" : `${Contents.length}화`}
                    </div>
                  </CardFooter>
                </CardWrap>
              );
            })
          ) : isLoadingPgm ? (
            <LoadingComponent />
          ) : (
            <EmptyComponent comment={"검색 결과가 없습니다."} />
          )}
        </ListWrap>
      </WorkWrap>
      <WorkWrap active={activeMenu === 2 && 1}>
        <SearchBar>
          <Field flex={3}>
            <div className="mr-3 d-flex align-items-center">등록일</div>
            <div>
              <StyledDatePicker
                className="form-control"
                selected={postStartDate}
                onChange={(date) => setPostStartDate(date)}
                selectsStart
                isClearable
                startDate={postStartDate}
                endDate={postEndDate}
                placeholderText="입력하세요."
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="d-flex align-items-center ml-2 mr-2">~</div>
            <div>
              <StyledDatePicker
                className="form-control"
                selected={postEndDate}
                onChange={(date) => setPostEndDate(date)}
                selectsEnd
                isClearable
                startDate={postStartDate}
                endDate={postEndDate}
                placeholderText="입력하세요."
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </Field>
          <Field flex={1}>
            <InputGroup>
              <FormControl
                placeholder="검색어를 입력하세요."
                value={postSearchKeyword}
                onChange={onChangePostSearchKeyword}
              />
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
            <StyledButton onClick={onClickAddPostBtn}>프스트 등록</StyledButton>
          </Field>
          <Field flex={1}>
            <Form.Control
              as="select"
              value={postSort}
              onChange={onChangePostSort}
            >
              <option value="createdAt,DESC">등록일 순</option>
              <option value="createdAt,ASC">등록일 역순</option>
              <option value="updatedAt,DESC">수정일 순</option>
              <option value="updatedAt,ASC">수정일 역순</option>
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
  isLoadingPgm: PropTypes.bool.isRequired,
  isLoadingPost: PropTypes.bool.isRequired,
  // loadedProgram,
  // loadedPost: PropTypes.arrayOf(PropTypes.shape({})),
  activeMenu: PropTypes.number.isRequired,
  pgmStartDate: PropTypes.object.isRequired,
  postStartDate: PropTypes.object.isRequired,
  pgmEndDate: PropTypes.object.isRequired,
  postEndDate: PropTypes.object.isRequired,
  setPgmStartDate: PropTypes.func.isRequired,
  setPostStartDate: PropTypes.func.isRequired,
  setPgmEndDate: PropTypes.func.isRequired,
  setPostEndDate: PropTypes.func.isRequired,
  pgmSearchKeyword: PropTypes.string.isRequired,
  postSearchKeyword: PropTypes.string.isRequired,
  pgmSort: PropTypes.string.isRequired,
  postSort: PropTypes.string.isRequired,
  onChangePgmSearchKeyword: PropTypes.func.isRequired,
  onChangePostSearchKeyword: PropTypes.func.isRequired,
  onChangePgmSort: PropTypes.func.isRequired,
  onChangePostSort: PropTypes.func.isRequired,
  onClickSubMenuItem: PropTypes.func.isRequired,
  onClickAddPostBtn: PropTypes.func.isRequired,
  onClickAddProgramBtn: PropTypes.func.isRequired,
  onClickPgmItem: PropTypes.func.isRequired,
  onKeyDownPgmSearchKeyword: PropTypes.func.isRequired,
  onClickPgmSearchBtn: PropTypes.func.isRequired
};

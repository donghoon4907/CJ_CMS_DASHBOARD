import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Wrap,
  Title,
  HelpBar,
  StyledInput,
  LoadingWrap
} from "./LoginStyledComponent";

const LoginPresentation = ({
  id,
  idEl,
  pwd,
  pwdEl,
  isLogInLoading,
  onChangeId,
  onChangePwd,
  onSubmit,
  onClickSignUpBtn
}) => (
  <Container>
    <Wrap>
      <Title>로그인</Title>
      <p>
        <StyledInput
          type="text"
          autoComplete="off"
          placeholder="아이디를 입력하세요."
          value={id}
          onChange={onChangeId}
          ref={idEl}
        />
      </p>
      <p>
        <StyledInput
          type="password"
          autoComplete="off"
          placeholder="비밀번호를 입력하세요."
          value={pwd}
          onChange={onChangePwd}
          ref={pwdEl}
        />
      </p>
      <LoadingWrap width={458} height={40} loading={isLogInLoading ? 1 : 0}>
        <StyledInput
          loading={"true"}
          type="button"
          value="로그인"
          onClick={onSubmit}
        />
      </LoadingWrap>
      <HelpBar>
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
        <span onClick={onClickSignUpBtn}>회원 가입</span>
      </HelpBar>
    </Wrap>
  </Container>
);

export default LoginPresentation;

LoginPresentation.propTypes = {
  id: PropTypes.string.isRequired,
  idEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  pwd: PropTypes.string.isRequired,
  pwdEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  isLogInLoading: PropTypes.bool.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangePwd: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClickSignUpBtn: PropTypes.func.isRequired
};

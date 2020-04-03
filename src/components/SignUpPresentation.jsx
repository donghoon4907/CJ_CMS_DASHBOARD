import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Wrap,
  Title,
  StyledInput,
  LoadingWrap
} from "./LoginStyledComponent";
import {
  ValidateWrap,
  ValidateInputWrap,
  ValidateButtonWrap,
  ValidateComment
} from "./SignUpStyledComponent";
import { ArrowLoading } from "../assets/icons";

const SignUpPresentation = ({
  id,
  idEl,
  pwd,
  pwdEl,
  confirmPwd,
  confirmPwdEl,
  name,
  nameEl,
  email,
  emailEl,
  validateEmail,
  emailToken,
  tokenEl,
  confirmEmailToken,
  isDbCheckLoading,
  isCheckEmailLoading,
  isSignUpLoading,
  onChangeId,
  onChangePwd,
  onChangeConfirmPwd,
  onChangeName,
  onChangeEmail,
  onChangeConfirmEmailToken,
  onDoubleCheck,
  onCheckEmail,
  onCancel,
  onSubmit
}) => (
  <Container>
    <Wrap>
      <Title>회원가입</Title>
      <label>아이디</label>
      <ValidateWrap height={35}>
        <ValidateInputWrap>
          <StyledInput
            type="text"
            autoComplete="off"
            placeholder="아이디를 입력하세요."
            value={id}
            onChange={onChangeId}
            ref={idEl}
          />
        </ValidateInputWrap>
        <ValidateButtonWrap>
          <LoadingWrap
            width={90}
            height={35}
            loading={isDbCheckLoading ? 1 : 0}
          >
            <StyledInput
              type="button"
              value="중복확인"
              onClick={onDoubleCheck}
            />
          </LoadingWrap>
        </ValidateButtonWrap>
      </ValidateWrap>
      <p>
        <label>비밀번호</label>
        <StyledInput
          type="password"
          autoComplete="off"
          placeholder="비밀번호를 입력하세요."
          value={pwd}
          onChange={onChangePwd}
          ref={pwdEl}
        />
        <sub></sub>
      </p>
      <p>
        <label>비밀번호 확인</label>
        <StyledInput
          type="password"
          autoComplete="off"
          placeholder="비밀번호를 입력하세요."
          value={confirmPwd}
          onChange={onChangeConfirmPwd}
          ref={confirmPwdEl}
        />
        <sub></sub>
      </p>
      <hr />
      <p>
        <label>이름</label>
        <StyledInput
          type="text"
          autoComplete="off"
          placeholder="이름을 입력하세요."
          value={name}
          onChange={onChangeName}
          ref={nameEl}
        />
      </p>
      <label>이메일</label>
      <ValidateWrap height={35}>
        <ValidateInputWrap>
          <StyledInput
            type="text"
            autoComplete="off"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChangeEmail}
            ref={emailEl}
          />
        </ValidateInputWrap>
        <ValidateButtonWrap bottom={0}>
          <LoadingWrap
            width={90}
            height={35}
            loading={isDbCheckLoading ? 1 : 0}
          >
            <StyledInput type="button" value="검증" onClick={onCheckEmail} />
          </LoadingWrap>
        </ValidateButtonWrap>
        {isCheckEmailLoading ? (
          <LoadingWrap>
            <ArrowLoading width={20} height={20} />
          </LoadingWrap>
        ) : (
          ""
        )}
      </ValidateWrap>
      <ValidateComment>
        {validateEmail ? "" : "이메일 형식에 맞지 않습니다."}
      </ValidateComment>
      {emailToken ? (
        <p>
          <StyledInput
            type="text"
            autoComplete="off"
            placeholder="인증번호 4자리를 입력하세요."
            value={confirmEmailToken}
            onChange={onChangeConfirmEmailToken}
            ref={tokenEl}
          />
        </p>
      ) : (
        ""
      )}
      <br />
      <LoadingWrap width={458} height={40} loading={isSignUpLoading ? 1 : 0}>
        <StyledInput type="submit" value="회원가입" onClick={onSubmit} />
      </LoadingWrap>
      <StyledInput type="button" value="취소" onClick={onCancel} />
    </Wrap>
  </Container>
);
export default SignUpPresentation;

SignUpPresentation.propTypes = {
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
  confirmPwd: PropTypes.string.isRequired,
  confirmPwdEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  name: PropTypes.string.isRequired,
  nameEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  email: PropTypes.string.isRequired,
  emailEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  validateEmail: PropTypes.bool.isRequired,
  emailToken: PropTypes.string,
  tokenEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  confirmEmailToken: PropTypes.string.isRequired,
  isDbCheckLoading: PropTypes.bool.isRequired,
  isCheckEmailLoading: PropTypes.bool.isRequired,
  isSignUpLoading: PropTypes.bool.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangePwd: PropTypes.func.isRequired,
  onChangeConfirmPwd: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeConfirmEmailToken: PropTypes.func.isRequired,
  onDoubleCheck: PropTypes.func.isRequired,
  onCheckEmail: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

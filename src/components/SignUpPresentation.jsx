import React from "react";
import PropTypes from "prop-types";
import { Container, Wrap, Title, LoadingWrap } from "./LoginStyledComponent";
import { Account, Password, Email } from "../assets/icons";

const SignUpPresentation = ({
  id,
  idEl,
  pwd,
  pwdEl,
  confirmPwd,
  confirmPwdEl,
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
  onChangeEmail,
  onChangeConfirmEmailToken,
  onDoubleCheck,
  onCheckEmail,
  onCancel,
  onSubmit
}) => (
  <Container>
    <Wrap>
      <Title>➤ 회원가입</Title>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <Account width={24} height={24} />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="계정을 입력하세요."
          value={id}
          onChange={onChangeId}
          ref={idEl}
        />
        <div className="input-group-append">
          <LoadingWrap
            width={80}
            height={38}
            loading={isDbCheckLoading ? 1 : 0}
          >
            <input
              className="btn btn-outline-primary"
              type="button"
              value="중복확인"
              onClick={onDoubleCheck}
            />
          </LoadingWrap>
        </div>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <Password width={24} height={24} />
          </span>
        </div>
        <input
          type="password"
          className="form-control"
          placeholder="암호를 입력하세요."
          value={pwd}
          onChange={onChangePwd}
          ref={pwdEl}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <Password width={24} height={24} />
          </span>
        </div>
        <input
          type="password"
          className="form-control"
          placeholder="암호를 재입력하세요."
          value={confirmPwd}
          onChange={onChangeConfirmPwd}
          ref={confirmPwdEl}
        />
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <Email width={24} height={24} />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={onChangeEmail}
          ref={emailEl}
        />
        <div className="input-group-append">
          <LoadingWrap
            width={80}
            height={38}
            loading={isCheckEmailLoading ? 1 : 0}
          >
            <input
              className="btn btn-outline-primary btn-block"
              type="button"
              value="검증"
              onClick={onCheckEmail}
            />
          </LoadingWrap>
        </div>
      </div>
      <sub style={{ color: "red" }}>
        {validateEmail ? "" : "이메일 형식에 맞지 않습니다."}
      </sub>
      <div style={{ display: emailToken ? "block" : "none" }}>
        <input
          type="number"
          className="form-control mt-3"
          placeholder="인증번호를 입력하세요."
          value={confirmEmailToken}
          onChange={onChangeConfirmEmailToken}
          ref={tokenEl}
        />
      </div>

      <br />
      <div className="btn-group d-flex">
        <LoadingWrap loading={isSignUpLoading ? 1 : 0} style={{ flex: 1 }}>
          <input
            className="btn btn-outline-primary btn-block"
            type="button"
            value="회원가입"
            onClick={onSubmit}
            style={{ zIndex: 1, position: "relative" }}
          />
        </LoadingWrap>
        <LoadingWrap loading={0} style={{ flex: 1 }}>
          <input
            className="btn btn-outline-secondary btn-block"
            type="button"
            onClick={onCancel}
            value="취소"
          />
        </LoadingWrap>
      </div>
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
  onChangeEmail: PropTypes.func.isRequired,
  onChangeConfirmEmailToken: PropTypes.func.isRequired,
  onDoubleCheck: PropTypes.func.isRequired,
  onCheckEmail: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

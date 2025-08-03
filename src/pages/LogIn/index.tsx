import { useState } from "react";
import styled from "styled-components";
import googleIcon from "../../assets/icons/web_neutral_rd_na@2x.png";

const StyledCnt = styled.div`
  width: 427px;
  height: 100vh;
  margin: auto;
  text-align: center;
  padding: 60px;
  font-size: 16px;
`;
const StyledTitle = styled.div`
  font-size: 34px;
  margin-top: 70px;
`;
const StyledFieldLabel = styled.div`
  text-align: left;
  padding-left: 8px;
  padding-bottom: 4px;
`;
const StyledField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  background-color: #dddddd;
  padding: 10px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
const StyledErrMsg = styled.p`
  font-size: 12px;
  color: red;
  text-align: left;
`;
const StyledLoginBtn = styled.button`
  background-color: #ff0000;
  color: white;
  width: 100%;
  border: none;
  padding: 16px;
`;
const StyledShortcutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
const StyledShortcut = styled.a`
  font-size: 12px;
`;
const StyledShortcutSeparator = styled.span`
  width: 2px;
  height: 32px;
  background-color: #d6d6d6;
`;
const StyledOr = styled.div`
  margin-bottom: 24px;
`;
const StyledSigninWithGoogleAccount = styled.div`
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 8px;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.17);
  & > img {
    width: 19px;
    height: 19px;
  }
`;

const Login = () => {
  const [errMsg, setErrMsg] = useState<string>();
  return (
    <StyledCnt>
      <StyledTitle>로그인</StyledTitle>
      <StyledFieldLabel>아이디</StyledFieldLabel>
      <StyledField placeholder="아이디를 입력하세요" />
      <StyledFieldLabel>비밀번호</StyledFieldLabel>
      <StyledField placeholder="비밀번호를 입력하세요" />
      {errMsg ? <StyledErrMsg>{errMsg}</StyledErrMsg> : null}
      <StyledLoginBtn>로그인</StyledLoginBtn>
      <StyledShortcutWrapper>
        <StyledShortcut>아이디 찾기</StyledShortcut>
        <StyledShortcutSeparator />
        <StyledShortcut>비밀번호 찾기</StyledShortcut>
        <StyledShortcutSeparator />
        <StyledShortcut>회원가입</StyledShortcut>
      </StyledShortcutWrapper>
      <StyledOr>OR</StyledOr>
      <StyledSigninWithGoogleAccount>
        <img src={googleIcon} alt="" />
        <span>구글 계정으로 로그인</span>
      </StyledSigninWithGoogleAccount>
    </StyledCnt>
  );
};

export default Login;

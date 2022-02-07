import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loginState } from "../atoms";
import { theme } from "../theme";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useRecoilState(loginState);

  const handleLogin = () => {
    setLogin(true);
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);
  return (
    <Container>
      <TextHeader>
        <p>Login</p>
      </TextHeader>
      <LoginContainer>
        <button onClick={handleLogin} className="social_login_btn google">
          google
        </button>
        <button onClick={handleLogin} className="social_login_btn facebook">
          facebook
        </button>
        <button onClick={handleLogin} className="social_login_btn naver">
          naver
        </button>
        <button onClick={handleLogin} className="social_login_btn kakao">
          kakao
        </button>
      </LoginContainer>
    </Container>
  );
}
export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor01};
  padding-top: 30px;
`;

const TextHeader = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  > p {
    font-size: 36px;
    font-weight: 900;
    margin-right: 10px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  .social_login_btn {
    width: 300px;
    height: 48px;
    border-radius: 8px;
    margin-bottom: 10px;
    color: #111;
  }
  .social_login_btn.google {
    background-color: #f4f4f4;
  }
  .social_login_btn.facebook {
    background-color: #4866e4;
  }
  .social_login_btn.naver {
    background-color: #1bb71f;
  }
  .social_login_btn.kakao {
    background-color: #fae300;
  }
`;

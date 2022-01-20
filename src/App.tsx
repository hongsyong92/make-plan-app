import "./assets/fonts/pretendard.css";
import styled from "styled-components";
import Router from "./Components/Router";
import Login from "./routes/Login";
import { useRecoilValue } from "recoil";
import { loginState } from "./atoms";

function App() {
  const isLogin = useRecoilValue(loginState);

  return <Container>{!isLogin ? <Login /> : <Router />}</Container>;
}

export default App;

const Container = styled.div`
  position: relative;
  width: 428px;
  height: 926px;
  max-width: 428px;
  max-height: 926px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`;

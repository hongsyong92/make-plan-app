import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/fonts/pretendard.css";
import UserMenu from "./routes/UserMenu";
import Home from "./routes/Home";
import BottomNav from "./Components/BottomNav";
import styled from "styled-components";
import CalendarScreen from "./routes/CalendarScreen";
import Login from "./routes/Login";
import { useRecoilState } from "recoil";
import { loginState } from "./atoms";

function App() {
  const [isLogin, setLogin] = useRecoilState(loginState);
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <Container>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            index
            element={
              isLogin ? (
                <Home />
              ) : (
                <Login isLogin={isLogin} handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/present-progress-app"
            element={
              isLogin ? (
                <Home />
              ) : (
                <Login isLogin={isLogin} handleLogin={handleLogin} />
              )
            }
          />
          <Route path="/todos/:id" element={<Home />} />
          {/* <Route path="/add-todos" element={<Home />} /> */}
          <Route path="/select-date" element={<CalendarScreen />} />
          {/* user menu 화면 */}
          <Route
            path="/user-menu"
            element={isLogin ? <Home /> : <UserMenu />}
          />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </Container>
  );
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

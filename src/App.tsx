import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/fonts/pretendard.css";
import UserMenu from "./routes/UserMenu";
import Home from "./routes/Home";
import BottomNav from "./Components/BottomNav";
import styled from "styled-components";
import CalendarScreen from "./routes/CalendarScreen";

function App() {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* user menu 화면 */}
          <Route path="/user-menu" element={<UserMenu />} />
          {/* home 화면 */}
          <Route path="/todos/:id" element={<Home />} />
          <Route path="/add-todos" element={<Home />} />
          <Route path="/select-date" element={<CalendarScreen />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <BottomNav />
      </Router>
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

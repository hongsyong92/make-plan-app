import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../atoms";
import Home from "../routes/Home";
import Login from "../routes/Login";
import UserMenu from "../routes/UserMenu";
import CalendarScreen from "../routes/CalendarScreen";
import BottomNav from "../Components/BottomNav";

function Router() {
  const isLogin = useRecoilValue(loginState);

  return (
    <>
      <Routes>
        <Route index element={isLogin ? <Home /> : <Login />} />
        <Route path="/todos/:id" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-date" element={<CalendarScreen />} />
        {/* user menu 화면 */}
        <Route path="/user-menu" element={isLogin ? <UserMenu /> : <Login />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default Router;

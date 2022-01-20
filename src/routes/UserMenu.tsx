import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { loginState } from "../atoms";
import { theme } from "../theme";

function UserMenu() {
  const setLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    setLogin(false);
  };
  return (
    <Container>
      <TextHeader>
        <p>user 님의 메뉴</p>
        <button onClick={handleLogout}>로그아웃</button>
      </TextHeader>
    </Container>
  );
}
export default UserMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor};
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

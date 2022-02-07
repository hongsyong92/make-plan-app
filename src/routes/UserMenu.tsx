import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { loginState } from "../atoms";
import { theme } from "../theme";
import profileSampleImg from "../images/user_profile_img.jpeg";

const pageVariants = {
  initial: {
    x: 500,
    transition: { type: "tween" },
  },
  visible: {
    x: 0,
    transition: { type: "tween" },
  },
  exit: {
    x: -500,
    transition: { type: "tween" },
  },
};

function UserMenu() {
  const setLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    setLogin(false);
  };
  return (
    <AnimatePresence>
      <Container
        variants={pageVariants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <TextHeader>
          <p>user 님의 메뉴</p>
          <button onClick={handleLogout}>로그아웃</button>
        </TextHeader>
        <MenuBox>
          <div className="user_menu">
            <div className="profile_img">
              <img src={profileSampleImg} alt="profile img" />
            </div>
            <div className="user_name">
              <p>test_account</p>
            </div>
          </div>
          <div className="account_menu">
            <p>연동된 계정 : test_account@google.com</p>
          </div>
        </MenuBox>
      </Container>
    </AnimatePresence>
  );
}
export default UserMenu;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor01};
  padding: 30px 20px 0 20px;
`;

const TextHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 50px;
  > p {
    font-size: 36px;
    font-weight: 900;
    margin-right: 10px;
  }
`;

const MenuBox = styled.div`
  position: relative;
  width: 100%;
  .user_menu {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    .profile_img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: ${theme.bgColor04};
      overflow: hidden;
      margin-right: 20px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .user_name {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .account_menu {
    display: flex;
    align-items: center;
    padding-left: 15px;
    > p {
      width: auto;
      display: inline-block;
      color: ${theme.textColor02};
    }
  }
`;

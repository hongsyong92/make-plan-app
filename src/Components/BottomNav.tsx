import styled from "styled-components";
import { BsListCheck } from "react-icons/bs";
import { RiAddCircleLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { theme } from "../theme";
import { Link } from "react-router-dom";
import AddToDo from "./AddToDo";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "../atoms";

function BottomNav() {
  const [addOpen, setAddOpen] = useState(false);
  const isLogin = useRecoilValue(loginState);
  const handleAddClick = () => {
    if (isLogin) {
      setAddOpen(true);
    } else {
      console.log("not loggged in");
    }
  };
  const onClose = () => {
    setAddOpen(false);
  };
  return (
    <>
      <Container>
        <div className="menu_item">
          <button>
            <Link to="/">
              <BsListCheck size="22" />
            </Link>
          </button>
        </div>
        <div className="menu_item">
          <button onClick={handleAddClick}>
            <RiAddCircleLine size="22" />
          </button>
        </div>
        <div className="menu_item">
          <button>
            <Link to="/user-menu">
              <BiUser size="22" />
            </Link>
          </button>
        </div>
      </Container>
      <AddToDo addOpen={addOpen} onClose={onClose} />
    </>
  );
}

export default BottomNav;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 55px;
  border-top: 1px solid ${theme.borderColor};
  background-color: ${theme.baseColor};
  .menu_item {
    position: relative;
    width: 54px;
    height: 100%;
    > button {
      width: 100%;
      height: 100%;
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

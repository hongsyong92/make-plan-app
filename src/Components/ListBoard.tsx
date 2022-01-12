import { useState } from "react";
import styled from "styled-components";
import MenuModal from "./MenuModal";

function ListBoard() {
  const [isOpen, setOpen] = useState(false);
  const handleMenuClick = () => {
    setOpen((prev) => !prev);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Header>
        <BoardTitle>Planable Life</BoardTitle>
        <Menu onClick={handleMenuClick}>📅</Menu>
      </Header>
      {/* <MenuModal isOpen={isOpen} closeModal={closeModal} /> */}
    </Container>
  );
}

export default ListBoard;

const Container = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  min-height: 812px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 24px;
  padding: 30px;
  .menu_modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: greenyellow;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const BoardTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Menu = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background-color: inherit;
  cursor: pointer;
  width: 24px;
  height: 24px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

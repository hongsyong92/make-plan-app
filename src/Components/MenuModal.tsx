import styled from "styled-components";

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
}

const MenuModal = ({ isOpen, closeModal }: IModal) => {
  return (
    <Container>
      <h1>메뉴 모달 입니다.</h1>
      <h2 onClick={closeModal}>닫기</h2>
    </Container>
  );
};

export default MenuModal;

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  color: #000;
`;

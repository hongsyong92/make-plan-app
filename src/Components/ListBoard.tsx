import styled from "styled-components";

function ListBoard() {
  return (
    <Container>
      <Header>
        <BoardTitle>Planable Life</BoardTitle>
        <Menu>menu</Menu>
      </Header>
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
`;

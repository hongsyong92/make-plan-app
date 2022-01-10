import styled from "styled-components";

function ListBoard() {
  return (
    <Container>
      <BoardTitle>PLANABLE</BoardTitle>
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
`;

const BoardTitle = styled.h1`
  text-align: center;
`;

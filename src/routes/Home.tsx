import styled from "styled-components";
import { theme } from "../theme";
import dayjs from "dayjs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ToDoMockData } from "../toDoMockData";
import ToDoItem from "../Components/ToDoItem";
import ToDoDetail from "../Components/ToDoDetail";
import AddToDo from "../Components/AddToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "../atoms";

function Home() {
  let now = dayjs();
  const percentage = 1;
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const addToDoMatch = location.pathname.includes("/add-todos");
  const onToDoClick = (toDoId: number) => {
    navigate(`/todos/${toDoId}`);
  };
  const clickedToDo =
    params.id && ToDoMockData.find((item) => item.id === Number(params.id));

  const toDos = useRecoilValue(toDoState);

  return (
    <Container>
      <TextHeader>
        <p>TODAY</p>
        <Link to="/select-date">
          <span>{now.format("YYYY.MM.DD")} &nbsp;&nbsp;📅</span>
        </Link>
      </TextHeader>
      <ProgressBox>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </ProgressBox>
      <ListBoard>
        <BoardTitle>TO DO LIST</BoardTitle>
        <List>
          {toDos.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              onClick={() => onToDoClick(item.id)}
            />
          ))}
        </List>
      </ListBoard>
      {clickedToDo ? (
        <>
          <Overlay onClick={() => navigate("/")} />
          <ToDoDetail item={clickedToDo} />
        </>
      ) : null}
      {addToDoMatch ? (
        <>
          <Overlay onClick={() => navigate("/")} />
          <AddToDo />
        </>
      ) : null}
    </Container>
  );
}
export default Home;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor};
  padding-top: 30px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const TextHeader = styled.div`
  position: relative;
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

const ProgressBox = styled.div`
  position: relative;
  width: 150px;
  margin-bottom: 20px;
  .CircularProgressbar-path {
    stroke: gold;
  }
  .CircularProgressbar-trail {
    stroke: ${theme.modalColor};
  }
  .CircularProgressbar-text {
    fill: gold;
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;

const ListBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
`;

const BoardTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 55px);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  z-index: 1;
`;

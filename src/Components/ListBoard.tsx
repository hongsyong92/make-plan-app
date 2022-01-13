import { useMatch, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const ToDoMockData = [
  {
    id: 1,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 2,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 3,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 4,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 5,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 6,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 7,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 8,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 9,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
  {
    id: 10,
    status: "TO_DO",
    content: "어쩌구 저쩌구 fake data",
    createdAt: "2022-01-13 15:33",
  },
];

function ListBoard() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const onToDoClick = (toDoId: number) => {
    navigate(`/todos/${toDoId}`);
  };
  return (
    <Container>
      <Header>
        <BoardTitle>TO DO LIST</BoardTitle>
      </Header>
      <List>
        {ToDoMockData.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onClick={() => onToDoClick(item.id)}
          />
        ))}
      </List>
    </Container>
  );
}

export default ListBoard;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 24px;
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
  margin-bottom: 30px;
`;

const BoardTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
`;

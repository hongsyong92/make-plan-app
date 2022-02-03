import styled from "styled-components";
import { theme } from "../theme";
import dayjs from "dayjs";
import "react-circular-progressbar/dist/styles.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ToDoItem from "../Components/ToDoItem";
import ToDoDetail from "../Components/ToDoDetail";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Home() {
  let now = dayjs();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [selectedId, setSelectedId] = useState<number | undefined>();
  const toDoDetailMatch = location.pathname.includes(`/todos/`);
  const onToDoClick = (toDoId: number | undefined) => {
    navigate(`/todos/${toDoId}`);
  };

  const toDos = useRecoilValue(toDoState);

  const clickedToDo =
    params.id && toDos.find((item) => item.id === Number(params.id));

  const pageVariants = {
    initial: {
      x: -500,
      transition: { type: "tween" },
    },
    visible: {
      x: 0,
      transition: { type: "tween" },
    },
    exit: {
      x: 500,
      transition: { type: "tween" },
    },
  };

  return (
    <AnimatePresence>
      <Container
        initial="initial"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <TextHeader>
          <p>TODAY</p>
          <Link to="/select-date">
            <span>{now.format("YYYY.MM.DD")} &nbsp;&nbsp;📅</span>
          </Link>
        </TextHeader>

        <ListBoard>
          <BoardTitle>TO DO LIST</BoardTitle>

          <List>
            {toDos?.length > 0 ? (
              <>
                {toDos?.map((item) => (
                  <ToDoItem
                    layoutId={item.id}
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    category={item.category}
                    onClick={() => {
                      onToDoClick(item.id);
                      setSelectedId(item.id);
                    }}
                  />
                ))}
              </>
            ) : (
              <p>아직 등록된 할 일이 없습니다.</p>
            )}
          </List>
        </ListBoard>
        {clickedToDo && selectedId && toDoDetailMatch ? (
          <>
            <Overlay onClick={() => navigate("/")} />
            <ToDoDetail item={clickedToDo} />
          </>
        ) : null}
      </Container>
    </AnimatePresence>
  );
}
export default Home;

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor};
  padding-top: 30px;
  @media all and (max-width: 500px) {
  }
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

const ListBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${(props) => props.theme.bgColor};
  overflow-x: hidden;
  overflow-y: auto;
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

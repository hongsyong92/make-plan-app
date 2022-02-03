import styled from "styled-components";
import { theme } from "../theme";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { IToDo, toDoState } from "../atoms";
import React from "react";
import { useSetRecoilState } from "recoil";

interface IToDoDetail {
  item: any;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: "50%",
    bottom: "50%",
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function ToDoDetail({ item }: IToDoDetail) {
  const navigate = useNavigate();
  const date = dayjs(item.id);
  const setToDos = useSetRecoilState(toDoState);
  const onChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === item.id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text: item.text, id: item.id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Container
      variants={pageVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <DetailHeader>
        <button className="close_btn" onClick={() => navigate("/")}>
          <RiCloseFill size="24" />
        </button>
      </DetailHeader>
      <div className="todo_content">
        <p className="todo_text">{item.text}</p>
        <div className="created">
          {date.format("MM.DD HH:mm")}에 생성된 할일
        </div>
        <div className="todo_btns">
          {item.category !== "TO_DO" && (
            <ToDoBtn name="TO_DO" onClick={onChangeCategory}>
              할 일
            </ToDoBtn>
          )}
          {item.category !== "DOING" && (
            <ToDoBtn name="DOING" onClick={onChangeCategory}>
              진행중
            </ToDoBtn>
          )}
          {item.category !== "DONE" && (
            <ToDoBtn name="DONE" onClick={onChangeCategory}>
              완료
            </ToDoBtn>
          )}
          <ToDoBtn>수정</ToDoBtn>
          <ToDoBtn>삭제</ToDoBtn>
        </div>
      </div>
    </Container>
  );
}

export default ToDoDetail;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 90%;
  height: 50vh;
  background-color: ${theme.modalColor};
  border-radius: 20px;
  overflow-x: hidden;
  padding: 30px 20px;
  z-index: 2;
  .todo_content {
    position: relative;
    width: 100%;
    height: 100%;
    .todo_text {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .created {
      color: ${theme.subTextColor};
      margin-bottom: 15px;
    }
    .todo_btns {
      position: absolute;
      width: 100%;
      bottom: 0;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const ToDoBtn = styled.button`
  width: 22%;
  height: 40px;
  border-radius: 14px;
  border: 1px solid ${theme.borderColor};
`;

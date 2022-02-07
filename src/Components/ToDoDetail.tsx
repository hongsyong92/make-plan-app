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

interface IbtnStyle {
  bgColor?: string;
  border?: boolean;
  textColor?: string;
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

const handleStatusColor = (ctg: any) => {
  switch (ctg) {
    case "TO_DO":
      return `background-color: ${theme.toDoStatusColor}`;
    case "DOING":
      return `background-color: ${theme.doingStatusColor}`;
    case "DONE":
      return `background-color: ${theme.doneStatusColor}`;
  }
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
        <div className="status_header">
          <StatusCircle category={item.category} />
          <p>
            {item.category === "TO_DO" && "해야 될 일"}
            {item.category === "DOING" && "진행 중인 일"}
            {item.category === "DONE" && "완료한 일"}
          </p>
        </div>
        <p className="todo_text">{item.text}</p>
        <div className="created">
          {date.format("MM.DD HH:mm")}에 생성된 할일
        </div>
        <div className="todo_btns">
          {item.category !== "TO_DO" && (
            <ToDoBtn
              bgColor={theme.toDoStatusColor}
              border={false}
              name="TO_DO"
              onClick={onChangeCategory}
            >
              할 일
            </ToDoBtn>
          )}
          {item.category !== "DOING" && (
            <ToDoBtn
              bgColor={theme.doingStatusColor}
              textColor="#262626"
              border={false}
              name="DOING"
              onClick={onChangeCategory}
            >
              진행중
            </ToDoBtn>
          )}
          {item.category !== "DONE" && (
            <ToDoBtn
              bgColor={theme.doneStatusColor}
              border={false}
              name="DONE"
              onClick={onChangeCategory}
            >
              완료
            </ToDoBtn>
          )}
          <ToDoBtn border bgColor="">
            수정
          </ToDoBtn>
          <ToDoBtn border={false} bgColor="#e63946">
            삭제
          </ToDoBtn>
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
  width: 375px;
  height: 35vh;
  background-color: ${theme.modalColor};
  border-radius: 20px;
  overflow-x: hidden;
  padding: 30px 20px;
  z-index: 2;
  @media all and (max-width: 500px) {
    width: 90%;
    height: 50vh;
  }
  .todo_content {
    position: relative;
    width: 100%;
    height: 100%;
    .status_header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .todo_text {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .created {
      color: ${theme.textColor03};
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

const ToDoBtn = styled.button<IbtnStyle>`
  width: 22%;
  height: 40px;
  border-radius: 14px;
  border: ${(props) => (props.border ? `1px solid ${theme.borderColor}` : 0)};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.textColor ? props.textColor : theme.textColor01)};
`;

const StatusCircle = styled.div<{ category: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${({ category }) => handleStatusColor(category)};
  margin-right: 10px;
`;

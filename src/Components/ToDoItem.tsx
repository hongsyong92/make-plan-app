import styled from "styled-components";
import { theme } from "../theme";
import { AiOutlineMore } from "react-icons/ai";
import React from "react";
import { IToDo } from "../atoms";
import { motion } from "framer-motion";
import dayjs from "dayjs";

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

function ToDoItem({ text, category, onClick, id }: IToDo) {
  const date = dayjs(id);

  return (
    <Container onClick={onClick}>
      <StatusLine category={category} />
      <ToDoContents>
        <p className={category === "DONE" ? "todo_text done" : "todo_text"}>
          {text}
        </p>
        <span className="created_at">{date.format("MM.DD HH:mm")}</span>
      </ToDoContents>
      <MoreBtn
        className="more_btn"
        onClick={() => console.log("more btn click")}
      >
        <AiOutlineMore size="24" />
      </MoreBtn>
    </Container>
  );
}
export default React.memo(ToDoItem);

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 24px;
  background-color: ${theme.baseColor};
  margin-bottom: 15px;
  padding: 25px 0 25px 20px;
  &:last-child {
    margin-bottom: 0;
  }
  > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const StatusLine = styled.div<{ category: string }>`
  width: 5px;
  height: 100%;
  border-radius: 6px;
  ${({ category }) => handleStatusColor(category)};
`;

const ToDoContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 3px 0 3px 15px;
  .todo_text {
    color: ${theme.textColor01};
  }
  .todo_text.done {
    color: ${theme.textColor04};
    text-decoration: line-through;
  }
  .created_at {
    font-size: 13px;
    color: ${theme.textColor03};
  }
`;

const MoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

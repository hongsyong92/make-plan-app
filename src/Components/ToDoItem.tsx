import styled from "styled-components";
import { theme } from "../theme";
import { AiOutlineMore } from "react-icons/ai";
import React from "react";
import { IToDo } from "../atoms";

function ToDoItem({ text, category, onClick }: IToDo) {
  return (
    <Container onClick={onClick}>
      <StatusLine category={category} />
      <ToDoContents>
        <p>{text}</p>
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

const Container = styled.div`
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
  padding: 15px 0 15px 20px;
  &:last-child {
    margin-bottom: 0;
  }
  > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const StatusLine = styled.div<{ category: string }>`
  width: 3px;
  height: calc(100% - 15px);
  background-color: ${(props) =>
    props.category === "TO_DO" ? "blue" : "DOING" ? "gold" : "green"};
`;

const ToDoContents = styled.div`
  width: 100%;
  padding-left: 15px;
`;

const MoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

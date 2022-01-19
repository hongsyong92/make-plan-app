import styled from "styled-components";
import { theme } from "../theme";
import { AiOutlineMore } from "react-icons/ai";
import React from "react";

interface IToDoItem {
  item: any;
  onClick: () => void;
}

function ToDoItem({ item, onClick }: IToDoItem) {
  console.log(item);
  return (
    <Container onClick={onClick}>
      <StatusLine />
      <ToDoContents>
        <p>{item.text}</p>
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

const StatusLine = styled.div`
  width: 2px;
  height: calc(100% - 15px);
  background-color: gold;
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

import styled from "styled-components";
import { theme } from "../theme";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface IToDoDetail {
  item: any;
}

function ToDoDetail({ item }: IToDoDetail) {
  const navigate = useNavigate();
  return (
    <Container>
      <DetailHeader>
        <button className="close_btn" onClick={() => navigate("/")}>
          <RiCloseFill size="24" />
        </button>
      </DetailHeader>
      <div className="created">{item.createdAt}</div>
      <div className="todo_content">{item.content}</div>
    </Container>
  );
}

export default ToDoDetail;

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70%;
  background-color: ${theme.modalColor};
  border-radius: 20px 20px 0 0;
  overflow-x: hidden;
  padding: 30px 20px;
  z-index: 2;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

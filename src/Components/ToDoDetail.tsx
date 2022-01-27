import styled from "styled-components";
import { theme } from "../theme";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  console.log(item);

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
      <div className="created">{item.id}</div>
      <div className="todo_content">{item.text}</div>
      <div className="todo_btns">
        <button>진행중</button>
        <button>완료</button>
      </div>
    </Container>
  );
}

export default ToDoDetail;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 70%;
  background-color: ${theme.modalColor};
  border-radius: 20px;
  overflow-x: hidden;
  padding: 30px 20px;
  z-index: 2;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

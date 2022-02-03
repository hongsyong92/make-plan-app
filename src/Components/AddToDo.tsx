import styled from "styled-components";
import { theme } from "../theme";
import { RiCloseFill } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import dayjs from "dayjs";

interface IAddToDoModal {
  addOpen: boolean;
  onClose: () => void;
}
interface IForm {
  toDo: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 1000,
    transition: { type: "tween" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween" },
  },
  exit: {
    opacity: 0,
    y: 1000,
    transition: { type: "tween" },
  },
};

function AddToDo({ addOpen, onClose }: IAddToDoModal) {
  const timeFomatter = dayjs();
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
    onClose();
  };

  return (
    <Container
      addOpen={addOpen}
      variants={pageVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <DetailHeader>
        <button className="close_btn" onClick={() => onClose()}>
          <RiCloseFill size="24" />
        </button>
      </DetailHeader>

      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "필수 입력 항목입니다.",
            minLength: 2,
          })}
          placeholder="할 일을 입력하세요"
        />
        <button className="add_todo_btn">
          <BiPencil size="16" />
          <span>등록하기</span>
        </button>
      </form>
    </Container>
  );
}
export default AddToDo;

const Container = styled(motion.div)<{ addOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 55px;
  width: 100%;
  height: 70%;
  padding: 30px 20px;
  overflow-x: hidden;
  border-radius: 20px 20px 0 0;
  background-color: ${theme.modalColor};
  z-index: 2;
  form {
    padding-top: 30px;
    display: flex;
    > input {
      width: calc(100% - 110px);
      height: 47px;
      margin: 0 auto;
      border: 0;
      outline: 0;
      background-color: transparent;
      border-bottom: 1px solid ${theme.textColor};
      color: ${theme.textColor};
      font-size: 18px;
      margin-bottom: 20px;
    }
    .add_todo_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 47px;
      border-radius: 8px;
      background-color: #577af8;
      cursor: pointer;
      > span {
        margin-left: 5px;
      }
    }
  }
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

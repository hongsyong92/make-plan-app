import styled from "styled-components";
import { theme } from "../theme";
import { RiCloseFill } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toDoState } from "../atoms";
import { useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

function AddToDo() {
  const navigate = useNavigate();
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ toDo }: any) => {
    setToDos((oldToDos) => [
      { text: toDo.text, category: "TO_DO", id: Date.now() },
      ...oldToDos,
    ]);
  };

  return (
    <Container>
      <DetailHeader>
        <button className="close_btn" onClick={() => navigate("/")}>
          <RiCloseFill size="24" />
        </button>
      </DetailHeader>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "필수 입력 항목입니다.",
            minLength: 2,
          })}
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <p>{errors?.toDo?.message}</p>
        <button className="add_todo_btn" onClick={() => navigate("/")}>
          <BiPencil size="16" />
          <span>등록하기</span>
        </button>
      </form>
    </Container>
  );
}
export default AddToDo;

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70%;
  padding: 30px 20px;
  overflow-x: hidden;
  background-color: ${theme.modalColor};
  z-index: 2;
  form {
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

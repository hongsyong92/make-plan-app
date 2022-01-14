import styled from "styled-components";
import { theme } from "../theme";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function AddToDo() {
  const navigate = useNavigate();
  return (
    <Container>
      <DetailHeader>
        <button className="close_btn" onClick={() => navigate("/")}>
          <RiCloseFill size="24" />
        </button>
      </DetailHeader>
      <form>
        <input type="text" placeholder="할일을 입력하세요" />
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
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

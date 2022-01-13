import styled from "styled-components";
import { theme } from "../theme";

function UserMenu() {
  return (
    <Container>
      <TextHeader>
        <p>user 님의 메뉴</p>
      </TextHeader>
    </Container>
  );
}
export default UserMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor};
  padding-top: 30px;
`;

const TextHeader = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  > p {
    font-size: 36px;
    font-weight: 900;
    margin-right: 10px;
  }
`;

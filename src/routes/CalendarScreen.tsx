import styled from "styled-components";
import Calendar from "../Components/Calendar";
import { theme } from "../theme";

function CalendarScreen() {
  return (
    <Container>
      <Calendar />
    </Container>
  );
}

export default CalendarScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor};
  padding-top: 30px;
`;

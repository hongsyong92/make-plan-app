import styled from "styled-components";
import { theme } from "../theme";
import dayjs from "dayjs";
import ListBoard from "../Components/ListBoard";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Home() {
  let now = dayjs();
  const percentage = 1;
  return (
    <Container>
      <TextHeader>
        <p>TODAY</p>
        <span>{now.format("YYYY.MM.DD")} 📅</span>
      </TextHeader>
      <ProgressBox>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </ProgressBox>
      <ListBoard />
    </Container>
  );
}
export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 55px);
  background-color: ${theme.bgColor};
  padding-top: 30px;
  overflow-y: auto;
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

const ProgressBox = styled.div`
  position: relative;
  width: 150px;
  margin-bottom: 20px;
  .CircularProgressbar-path {
    stroke: gold;
  }
  .CircularProgressbar-trail {
    stroke: ${theme.modalColor};
  }
  .CircularProgressbar-text {
    fill: gold;
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;

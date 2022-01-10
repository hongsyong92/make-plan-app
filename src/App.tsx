import styled from "styled-components";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Container>
      <Helmet>
        <title>Planable Lists</title>
      </Helmet>
      <h1>Awesome Plan list</h1>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

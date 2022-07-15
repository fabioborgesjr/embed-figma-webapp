import styled from "styled-components";
import Header from "./components/Header";
import Earn from "./pages/Earn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <Earn />
    </Container>
  );
}

export default App;

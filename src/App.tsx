import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Img from "./components/Img";
import Information from "./components/Information";
function App() {
  return (
    <>
      <Header></Header>
      <Maindvi>
        <Img></Img>
        <Information></Information>
      </Maindvi>
    </>
  );
}
const Maindvi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 770px) {
    flex-direction: row;
    gap: 120px;
  }
`;
export default App;

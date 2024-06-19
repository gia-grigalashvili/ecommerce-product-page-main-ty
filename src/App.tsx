import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Img from "./components/Img";
import Information from "./components/Information";
import { useState } from "react";
function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <Header count={count}></Header>
      <Maindvi>
        <Img></Img>
        <Information count={count} setcount={setcount}></Information>
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
    margin-top: 30px;
  }
`;
export default App;

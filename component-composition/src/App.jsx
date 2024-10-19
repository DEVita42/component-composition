import { useState } from "react";
import "./App.css";
import { Container } from "./Container";
import Counter from "./Counter";
import Clock from "./Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container title="Titolo contenitore">
        <Clock />
        <Counter />
      </Container>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import LeftContent from "./components/LeftContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />

      <LeftContent />
    </>
  );
}

export default App;

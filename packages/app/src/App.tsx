import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, Text } from "@perfios/components";

function App() {
  const [count, setCount] = useState(0);

  console.log(Button);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text lable="Your count is" />{count}
        <Button onClick={() => {
          setCount((prev) => ++prev)
          debugger;
        } }  lable="Apps cnt"/>
      </header>
    </div>
  );
}

export default App;
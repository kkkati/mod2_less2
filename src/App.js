import "./App.css";
import { useState } from "react";

function App() {
  const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let value;

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const getValue = (event) => {
    value = event.target.textContent;
    if (operator === "") {
      setOperand1((operand1Update) => operand1Update + value);
    } else {
      setOperand2((operand2Update) => operand2Update + value);
    }
  };
  const getSubtraction = () => {
    setOperator(operator + "-");
  };
  const getAddition = () => {
    setOperator(operator + "+");
  };
  const initialIalue = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
  };
  const getResult = () => {
    if (operator === "+") {
      setOperand1(Number(operand1) + Number(operand2));
    } else if (operator === "-") {
      setOperand1(Number(operand1) - Number(operand2));
    }
    setOperand2("");
    setOperator("");
  };
  return (
    <div className="App">
      <div>
        <input
          value={{ operand1 } + { operator } + { operand2 }}
          type="text"
          defaultValue="0"
        ></input>
      </div>
      <div>
        {NUMS.map((item) => {
          return <button onClick={getValue}>{item}</button>;
        })}
      </div>
      <div>
        <button onClick={getSubtraction}>-</button>
        <button onClick={initialIalue}>C</button>
        <button onClick={getAddition}>+</button>
        <button onClick={getResult}>=</button>
      </div>
    </div>
  );
}

export default App;

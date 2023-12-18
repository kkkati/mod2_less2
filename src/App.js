import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let value;

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [isResult, setIsResult] = useState(false);

  const getValue = (event) => {
    setIsResult(false);
    value = event.target.textContent;
    if (operator === "") {
      setOperand1((operand1Update) => operand1Update + value);
    } else {
      setOperand2((operand2Update) => operand2Update + value);
    }
  };
  const getSubtraction = () => {
    setIsResult(false);
    if (operand1 != "" && operator == "") {
      setOperator(operator + "-");
    }
  };
  const getAddition = () => {
    setIsResult(false);
    if (operand1 != "" && operator == "") {
      setOperator(operator + "+");
    }
  };
  const initiallValue = () => {
    setIsResult(false);
    setOperand1("");
    setOperand2("");
    setOperator("");
  };
  const getResult = () => {
    setIsResult(true);
    if (operator === "+") {
      setOperand1(Number(operand1) + Number(operand2));
    } else if (operator === "-") {
      setOperand1(Number(operand1) - Number(operand2));
    }
    setOperand2("");
    setOperator("");
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          className={
            isResult
              ? `${styles.output} ${styles.outputResult}`
              : `${styles.output}`
          }
          value={operand1 + operator + operand2}
          type="text"
          defaultValue="0"
        ></input>
      </div>
      <div>
        {NUMS.map((item) => {
          return (
            <button className={styles.button} onClick={getValue}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <button className={styles.buttonOperation} onClick={getSubtraction}>
          -
        </button>
        <button className={styles.buttonOperation} onClick={initiallValue}>
          C
        </button>
        <button className={styles.buttonOperation} onClick={getAddition}>
          +
        </button>
        <button className={styles.buttonOperation} onClick={getResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;

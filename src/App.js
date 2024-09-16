import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseStep() {
    if (step > 0) setStep((s) => s - 1);
  }
  function increaseCount() {
    setCount((c) => c + 1);
  }
  function decreaseCount() {
    if (count > 0) setCount((c) => c - 1);
  }

  function dateCalc() {
    const countCalc = step * count * 86400000;
    let currentDate = new Date().getTime();
    const calcDate = currentDate - countCalc;
    const calculatedDate = new Date(calcDate);
    const conclusion = new Date(calculatedDate).toDateString();
    return conclusion;
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "2,2",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={decreaseStep}
        >
          -
        </button>
        <p>Step: {step}</p>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={increaseStep}
        >
          +
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "2,2",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={decreaseCount}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={increaseCount}
        >
          +
        </button>
      </div>
      <p style={{ marginTop: "1rem" }}>{`${
        count * step
      } days ago was ${dateCalc()}`}</p>
    </>
  );
}

export default App;

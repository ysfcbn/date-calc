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
    if (step > 1) setStep((s) => s - 1);
  }
  function increaseCount() {
    setCount((c) => c + step);
  }
  function decreaseCount() {
    setCount((c) => c - step);
  }

  function dateCalc() {
    const countCalc = count * 86400000;
    let calculatedDate = new Date(
      new Date().getTime() + countCalc
    ).toDateString();
    return calculatedDate;
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
      <p style={{ marginTop: "1rem" }}>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{dateCalc()}</span>
      </p>
    </>
  );
}

export default App;

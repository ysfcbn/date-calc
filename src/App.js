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
          marginTop: "2rem",
        }}
      >
        <input
          type="range"
          min="0"
          max="10"
          value={+step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <span>Step: {step}</span>
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
        <input
          type="text"
          placeholder={+count}
          value={+count}
          onChange={(e) => setCount(+e.target.value)}
        ></input>
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

import { useState, useMemo } from "react";

function HookUseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
    </div>
  );
}

export default HookUseMemo;

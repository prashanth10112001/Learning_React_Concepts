import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import CounterControls from "./CounterControls";

export default function Counter() {
  const { state } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>🔢 Counter</h1>
      <p>Count: {state.count}</p>
      <CounterControls />
    </div>
  );
}

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CounterControls() {
  const { dispatch } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

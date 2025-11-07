import { useState, useCallback } from "react";
import Child from "./Child";
export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Function is stable across renders

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Parent Count: {count}</button>
      <Child name="John" handleClick={handleClick} />
    </div>
  );
}

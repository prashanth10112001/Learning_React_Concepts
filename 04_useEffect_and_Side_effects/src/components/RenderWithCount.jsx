import { useState, useEffect } from "react";

export default function RenderWithCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered with count change");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

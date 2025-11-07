import React, { useState } from "react";
import RenderInfinite from "./components/RenderInfinite";
import RenderWithCount from "./components/RenderWithCount";
import RenderOnce from "./components/RenderOnce";

function App() {
  const [path, setPath] = useState("/");
  let content = <RenderInfinite />;

  if (path === "/infinite") {
    content = <RenderInfinite />;
  } else if (path === "/withCount") {
    content = <RenderWithCount />;
  } else if (path === "/once") {
    content = <RenderOnce />;
  }
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setPath("/infinite")}>Infinte</button>
        </li>
        <li>
          <button onClick={() => setPath("/withCount")}>With Count</button>
        </li>
        <li>
          <button onClick={() => setPath("/once")}>Once</button>
        </li>
      </ul>
      {content}
    </div>
  );
}

export default App;

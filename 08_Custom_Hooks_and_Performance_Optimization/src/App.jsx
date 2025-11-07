import React from "react";
import useWindowWidth from "./components/useWindowWidth";
import Users from "./components/Users";
import Parent from "./components/Parent";
import HookUseMemo from "./components/HookUseMemo";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
function App() {
  const width = useWindowWidth();
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
      <h1>Window Width: {width} px</h1>
      <Users />
      <Parent />
      <HookUseMemo />
    </div>
  );
}

export default App;

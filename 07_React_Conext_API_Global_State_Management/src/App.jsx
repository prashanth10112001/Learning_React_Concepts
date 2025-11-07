import { useState } from "react";

import Toolbar from "./components/Toolbar";
import ThemeContext from "./components/ThemeContext";
import { CounterProvider } from "./context/CounterProvider";
import Counter from "./context/Counter";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide Context
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </ThemeContext.Provider>
  );
}

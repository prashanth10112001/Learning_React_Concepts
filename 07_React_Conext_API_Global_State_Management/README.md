Awesome! Let’s dive into **Context API**, a powerful tool for managing **global state** in React without prop drilling. 🌟

---

# 🌐 **10. React Context API (Global State Management)**

### 🧠 What is Context?

Context allows you to **share data** (like user info, theme, or settings) **across the component tree** without passing props manually at every level.

---

### 🔹 Basic Context Setup

```jsx
import { createContext, useState, useContext } from "react";

// 1. Create Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide Context
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

// 3. Consume Context
function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
}
```

✅ Key Points:

1. `createContext()` → creates a new context
2. `Provider` → wraps components that need access, provides `value`
3. `useContext` → consumes the context in any component

> Now **Toolbar** or any child can access the theme without passing props manually.

---

### 🔹 Updating Global State

You can store **any state** in Context:

- Theme (`light` / `dark`)
- User authentication info
- Language or locale
- Cart items in e-commerce apps

> This avoids “prop drilling” through multiple levels.

---

### 🔹 Multiple Contexts

You can have multiple contexts simultaneously:

```jsx
const AuthContext = createContext();
const ThemeContext = createContext();

<AuthContext.Provider value={{ user }}>
  <ThemeContext.Provider value={{ theme }}>
    <App />
  </ThemeContext.Provider>
</AuthContext.Provider>;
```

- Just wrap providers around each other
- Consume each with `useContext(AuthContext)` or `useContext(ThemeContext)`

---

### 🔹 Context + useReducer (Advanced Global State)

Instead of `useState`, you can combine **Context + useReducer** for **complex state logic**:

```jsx
import { createContext, useReducer, useContext } from "react";

const CounterContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

✅ Explanation:

- `useReducer` is better for **complex state updates**
- `dispatch` lets you **trigger actions** from any component
- Context makes this **global** across the app

---

### 🔨 Mini Exercise

Build a **theme toggler** app:

1. Global theme stored in Context (`light` / `dark`)
2. Two components: Header & Footer
3. Both show **current theme** and can **toggle theme**

> Challenge: Add a **counter** using Context + useReducer so it can be updated anywhere in the app.

---

We’ve now covered **Context API** and touched on **useReducer**.

Next, we can move to **Custom Hooks & Performance Optimization** to make React apps **cleaner and faster**.

Do you want to continue with that?

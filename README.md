# 🧭 React Learning Roadmap

We’ll go step by step — starting from **React basics** and moving all the way to **advanced concepts** (hooks, context, performance optimization, testing, etc.).

---

## 🧱 1. Basics

- **What is React & why it’s used**
- **Setting up a React project** (Vite or Create React App)
- **JSX** (JavaScript + XML)
- **Components** (functional & class components)
- **Props** (passing data)
- **State** (useState hook)
- **Event handling**
- **Conditional rendering**
- **Lists and keys**

---

## ⚙️ 2. Intermediate Concepts

- **Component composition**
- **Forms & controlled components**
- **useEffect hook** (side effects, cleanup)
- **useRef and DOM manipulation**
- **Lifting state up**
- **Reusable components**
- **React Router** (navigation between pages)

---

## 🧩 3. Advanced Concepts

- **Context API** (global state)
- **Custom hooks**
- **Performance optimization** (`memo`, `useCallback`, `useMemo`)
- **Code splitting and lazy loading**
- **Error boundaries**
- **Portals**
- **Forward refs**
- **React’s rendering and reconciliation**

---

Absolutely! Let’s carefully go step by step. I’ll provide a **comprehensive guide to React hooks, their usage, differences, and related topics**. This will be detailed but structured for clarity.

---

# **1️⃣ Explanation of All Common React Hooks**

### **A. Basic Hooks**

| Hook              | Purpose                                                                         | Example                                                         |
| ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `useState`        | Holds state in a functional component                                           | `const [count, setCount] = useState(0);`                        |
| `useEffect`       | Runs side effects (API calls, subscriptions, logging)                           | `useEffect(() => { console.log(count); }, [count]);`            |
| `useContext`      | Access context (global-like state)                                              | `const theme = useContext(ThemeContext);`                       |
| `useReducer`      | Manage complex state with reducer logic                                         | `const [state, dispatch] = useReducer(reducer, initialState);`  |
| `useRef`          | Access DOM elements or persist values across renders without causing re-renders | `const inputRef = useRef(null);`                                |
| `useMemo`         | Memoize expensive calculations                                                  | `const value = useMemo(() => compute(number), [number]);`       |
| `useCallback`     | Memoize functions to prevent unnecessary re-creations                           | `const handleClick = useCallback(() => doSomething(), [deps]);` |
| `useLayoutEffect` | Like `useEffect` but runs **before painting** on the DOM                        | `useLayoutEffect(() => { ... }, []);`                           |
| `useDebugValue`   | Display debug info in React DevTools                                            | `useDebugValue(value);`                                         |

---

### **B. Additional / Less Common Hooks**

| Hook                   | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `useImperativeHandle`  | Expose custom methods when using `forwardRef`              |
| `useTransition`        | Helps mark updates as low-priority (for concurrent mode)   |
| `useDeferredValue`     | Defer rendering a value until high-priority tasks are done |
| `useId`                | Generate stable unique IDs for accessibility               |
| `useSyncExternalStore` | Subscribe to external stores (React 18+)                   |
| `useInsertionEffect`   | Rare; for CSS-in-JS libraries before DOM mutations         |

---

# **2️⃣ Differences Between Hooks**

### **useState vs useReducer**

| Feature         | useState                                 | useReducer                                                     |
| --------------- | ---------------------------------------- | -------------------------------------------------------------- |
| Simplicity      | Simple state                             | Complex state logic                                            |
| Multiple values | Can have multiple state variables        | Handles all state in one reducer object                        |
| When to use     | Small state                              | Multiple related state changes, predictable updates            |
| Example         | `const [count, setCount] = useState(0);` | `const [state, dispatch] = useReducer(reducer, initialState);` |

---

### **useEffect vs useLayoutEffect**

| Feature          | useEffect                        | useLayoutEffect                           |
| ---------------- | -------------------------------- | ----------------------------------------- |
| Timing           | After render & painting          | Before painting                           |
| Block rendering? | No                               | Can block rendering (synchronous)         |
| Use case         | API calls, logging, side effects | Measure DOM, calculate layout, animations |

---

### **useMemo vs useCallback**

| Feature      | useMemo                | useCallback                                 |
| ------------ | ---------------------- | ------------------------------------------- |
| Returns      | Memoized **value**     | Memoized **function**                       |
| Dependencies | Array of variables     | Array of variables                          |
| Use case     | Expensive calculations | Prevent function recreation for child props |

---

### **useContext vs Redux / useReducer + Context**

| Feature      | useContext          | Redux / useReducer + Context              |
| ------------ | ------------------- | ----------------------------------------- |
| Scope        | Component tree only | App-wide state                            |
| Side effects | None                | Can integrate middleware for side effects |
| Complexity   | Simple              | Predictable for large apps                |
| Analogy      | Local theme toggle  | Mini Redux store                          |

---

# **3️⃣ Differences With Hooks That Look Similar**

| Hooks                            | Difference                                                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| `useState` vs `useRef`           | `useRef` doesn’t trigger re-renders; `useState` does                                     |
| `useEffect` vs `useMemo`         | `useEffect` = side effect after render; `useMemo` = compute memoized value during render |
| `useReducer` vs `useState`       | Reducer allows multiple related state updates in one object; `useState` is per-value     |
| `useCallback` vs `useMemo`       | Callback memoizes **function**, useMemo memoizes **value**                               |
| `useLayoutEffect` vs `useEffect` | Runs **synchronously** before paint; useEffect runs asynchronously after paint           |

---

# **4️⃣ Hooks Syntax, Attributes, and Usage**

### **A. `useState`**

```jsx
const [state, setState] = useState(initialValue);
```

- **initialValue**: starting state
- **state**: current value
- **setState**: updates state and triggers render

---

### **B. `useEffect`**

```jsx
useEffect(() => {
  // side effect
  return () => {
    /* cleanup */
  };
}, [dependencies]);
```

- Runs after render
- `[dependencies]` → when effect runs; empty array = runs once
- Cleanup function optional

---

### **C. `useReducer`**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- **reducer**: `(state, action) => newState`
- **dispatch(action)** triggers reducer
- Useful for complex state updates

---

### **D. `useContext`**

```jsx
const value = useContext(MyContext);
```

- Access context value provided via `<MyContext.Provider>`

---

### **E. `useRef`**

```jsx
const ref = useRef(initialValue);
```

- Access DOM element: `ref.current`
- Persist value across renders without re-rendering

---

### **F. `useMemo`**

```jsx
const memoizedValue = useMemo(() => computeExpensive(), [dependencies]);
```

- Memoizes value, recompute only when dependencies change

---

### **G. `useCallback`**

```jsx
const memoizedFn = useCallback(() => {
  doSomething();
}, [dependencies]);
```

- Memoizes function, avoids unnecessary re-creations

---

### **H. `useLayoutEffect`**

```jsx
useLayoutEffect(() => {
  /* runs before paint */
}, [dependencies]);
```

---

# **5️⃣ Important Hooks / Libraries Often Used**

### **A. `useMemo`**

- Cache heavy computations
- Avoid recalculation on every render

### **B. `useQuery` (React Query)**

```jsx
const { data, error, isLoading } = useQuery("key", fetchDataFn);
```

- For fetching and caching server data
- Handles loading, error, and caching automatically

### **C. `axios`**

```jsx
import axios from "axios";

axios.get("/api/data").then((res) => console.log(res.data));
```

- For API requests
- Works with `useEffect` or `useQuery`
- Handles HTTP requests easily

---

### **D. Common Patterns**

1. **State + Effect**

```jsx
const [data, setData] = useState([]);
useEffect(() => {
  fetch("/api")
    .then((r) => r.json())
    .then(setData);
}, []);
```

2. **Memoized expensive value**

```jsx
const filtered = useMemo(() => items.filter((x) => x.active), [items]);
```

3. **Context + Reducer**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
<Context.Provider value={{ state, dispatch }}>
  <App />
</Context.Provider>;
```

---

✅ **Summary**

- **`useState`** → simple local state
- **`useEffect`** → side effects, lifecycle events
- **`useReducer`** → complex state logic
- **`useContext`** → global-ish state access
- **`useMemo`** → memoized value
- **`useCallback`** → memoized function
- **`useRef`** → DOM access or persistent value
- **`useLayoutEffect`** → synchronous effect before paint
- **`useQuery` / `axios`** → API requests & caching

---

| Hook                     | Syntax                                                                      | Parameters                                   | Returns                         | When / Why to Use                                          | Notes / Tips                                                   |
| ------------------------ | --------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| **useState**             | `const [state, setState] = useState(initialValue);`                         | `initialValue`: starting value               | `[state, setState]`             | Store simple state in a component                          | Updating `state` triggers re-render                            |
| **useEffect**            | `useEffect(() => { effect }, [dependencies]);`                              | `effect`: function, `[dependencies]`: array  | Cleanup function optional       | Side effects: API calls, subscriptions, logging            | Empty array → run once; no array → runs after every render     |
| **useReducer**           | `const [state, dispatch] = useReducer(reducer, initialState);`              | `reducer(state, action)`, `initialState`     | `[state, dispatch]`             | Manage complex state or multiple related state variables   | Works well with Context for global-like state                  |
| **useContext**           | `const value = useContext(MyContext);`                                      | Context object created via `createContext()` | Context value                   | Access shared state from parent Provider                   | Must wrap component in `<MyContext.Provider>`                  |
| **useRef**               | `const ref = useRef(initialValue);`                                         | `initialValue`                               | `ref` object with `ref.current` | Persist value between renders or access DOM elements       | Updating `ref.current` **does not trigger render**             |
| **useMemo**              | `const memoizedValue = useMemo(() => compute(), [dependencies]);`           | Function returning value, `[dependencies]`   | Memoized value                  | Avoid expensive recalculations                             | Runs **during render**, recomputes only if dependencies change |
| **useCallback**          | `const memoizedFn = useCallback(() => { doSomething(); }, [dependencies]);` | Function, `[dependencies]`                   | Memoized function               | Avoid function re-creation between renders                 | Often used when passing functions to child components          |
| **useLayoutEffect**      | `useLayoutEffect(() => { effect }, [dependencies]);`                        | Effect function, `[dependencies]`            | Cleanup function optional       | Synchronous effect before painting DOM                     | Useful for measuring DOM or layout adjustments                 |
| **useDebugValue**        | `useDebugValue(value)`                                                      | Value to display in DevTools                 | None                            | Display custom debug info in React DevTools                | Helpful for custom hooks                                       |
| **useImperativeHandle**  | `useImperativeHandle(ref, () => ({ method }))`                              | `ref` from forwardRef, factory function      | Custom object                   | Expose custom methods to parent                            | Used with `forwardRef`                                         |
| **useTransition**        | `const [isPending, startTransition] = useTransition();`                     | None                                         | `[isPending, startTransition]`  | Mark updates as low-priority                               | For concurrent mode rendering                                  |
| **useDeferredValue**     | `const deferred = useDeferredValue(value);`                                 | `value` to defer                             | Deferred value                  | Delay rendering a value until high-priority updates finish | Useful for large lists or inputs                               |
| **useId**                | `const id = useId();`                                                       | None                                         | Unique stable ID                | Accessibility, unique IDs in components                    | New in React 18+                                               |
| **useSyncExternalStore** | `useSyncExternalStore(subscribe, getSnapshot)`                              | Subscribe function, snapshot function        | Current store value             | Subscribe to external stores safely                        | Used in libraries like Redux                                   |
| **useInsertionEffect**   | `useInsertionEffect(() => { ... }, [deps])`                                 | Effect function, dependencies                | Cleanup optional                | Insert CSS or DOM mutations before render                  | Rarely used, mainly CSS-in-JS libraries                        |

| Topic                      | Syntax / Example                                               | Parameters                                          | Purpose                                               |
| -------------------------- | -------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| **useQuery (React Query)** | `const { data, isLoading, error } = useQuery('key', fetchFn);` | `'key'`: query key, `fetchFn`: async fetch function | Fetch & cache API data efficiently                    |
| **axios**                  | `axios.get('/api').then(res => ...)`                           | URL, config object                                  | Perform HTTP requests                                 |
| **React Router `Link`**    | `<Link to="/path">Go</Link>`                                   | `to`: path                                          | Navigate between routes without reload                |
| **React Router `Route`**   | `<Route path="/home" element={<Home />} />`                    | `path`, `element`                                   | Render component at specific route                    |
| **React Router `Routes`**  | `<Routes>...</Routes>`                                         | Children `Route`s                                   | Wrap all `Route` components                           |
| **Conditional Rendering**  | `{condition && <Component />}`                                 | `condition`: boolean                                | Render JSX conditionally                              |
| **Lists & Keys**           | `{array.map(item => <li key={item.id}>{item.text}</li>)}`      | Array of objects                                    | Render lists efficiently, keys help React track items |

Absolutely! Let’s go **hook by hook** with **detailed explanations and working examples** so you can see how each one works in real React code. I’ll also include **props, state, API calls, routing, and context** examples where relevant.

---

# **🧱 1. useState**

**Purpose:** Store and update simple state in a component.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

**Explanation:**

- `count` stores the current value.
- `setCount` updates it.
- Updating state triggers **re-render** automatically.

---

# **🧱 2. useEffect**

**Purpose:** Run side-effects after render (API calls, subscriptions, DOM updates).

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []); // empty array → run once

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;
```

**Explanation:**

- Runs after render.
- Cleanup function runs before unmount or next effect.
- Dependency array controls **when effect runs**.

---

# **🧱 3. useReducer**

**Purpose:** Manage complex state or multiple related updates.

```jsx
import { useReducer } from "react";

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

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
```

**Explanation:**

- `state` is the current state object.
- `dispatch` sends actions to the reducer.
- Useful for **complex or grouped state updates**.

---

# **🧱 4. useContext**

**Purpose:** Share state between components without prop drilling.

```jsx
import { createContext, useContext, useState } from "react";

// 1. Create context
const ThemeContext = createContext();

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current Theme: {theme}
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h1>React Context Example</h1>
      <ThemeButton />
    </ThemeContext.Provider>
  );
}
```

**Explanation:**

- `useContext` reads context value.
- Context provides **shared state** across components.

---

# **🧱 5. useRef**

**Purpose:** Access DOM nodes or persist values across renders without re-rendering.

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

**Explanation:**

- `ref.current` points to the DOM node.
- Updating `ref.current` does **not trigger re-render**.

---

# **🧱 6. useMemo**

**Purpose:** Memoize expensive calculations to avoid recomputation.

```jsx
import { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]); // only recompute when num changes

  return (
    <div>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
    </div>
  );
}

export default ExpensiveCalc;
```

**Explanation:**

- Prevents expensive calculations on every render.
- Only recomputes when dependencies change.

---

# **🧱 7. useCallback**

**Purpose:** Memoize functions to prevent unnecessary re-creations.

```jsx
import { useState, useCallback } from "react";

function Child({ handleClick }) {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const memoizedHandler = useCallback(() => {
    console.log("Clicked!");
  }, []); // function reference is stable

  return (
    <div>
      <Child handleClick={memoizedHandler} />
      <button onClick={() => setCount(count + 1)}>Parent Count: {count}</button>
    </div>
  );
}
```

**Explanation:**

- Useful for **preventing child re-renders** when passing functions.

---

# **🧱 8. useLayoutEffect**

**Purpose:** Run synchronous effect **before painting the screen**.

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectExample() {
  const divRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(divRef.current.offsetWidth);
  });

  return <div ref={divRef}>Width: {width}</div>;
}

export default LayoutEffectExample;
```

**Explanation:**

- Runs **before the browser paints**, unlike `useEffect`.
- Useful for measuring or manipulating the DOM before render.

---

# **🧱 9. useTransition & useDeferredValue**

**Purpose:** Manage low-priority updates to improve performance.

```jsx
import { useState, useTransition } from "react";

function TransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setInput(value);
    });
  };

  return (
    <div>
      <input onChange={handleChange} placeholder="Type here..." />
      {isPending && <p>Updating...</p>}
      <p>Value: {input}</p>
    </div>
  );
}

export default TransitionExample;
```

**Explanation:**

- `startTransition` marks update as **low priority**.
- Keeps UI **responsive** during heavy calculations.

---

# **🧱 10. Routing Example with Nested Routes**

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Stats() {
  return <h3>Stats Page</h3>;
}
function Profile() {
  return <h3>Profile Page</h3>;
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link> | <Link to="profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
```

**Explanation:**

- Nested routes allow layouts like **dashboards**.
- `*` is needed in parent route for nested paths.

---

# **🧱 11. Data Fetching Example (useEffect + Axios / React Query)**

**Using Axios with useEffect:**

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <ul>
      {data.slice(0, 5).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default FetchData;
```

**Using React Query:**

```jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function FetchWithQuery() {
  const { data, isLoading } = useQuery(["posts"], () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <ul>
      {data.slice(0, 5).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

**Explanation:**

- `useEffect + axios` is manual.
- `React Query` handles caching, loading, and re-fetching automatically.

---

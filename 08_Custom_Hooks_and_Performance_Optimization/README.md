Perfect! Let’s dive into **Custom Hooks** and **Performance Optimization** in React — advanced topics that make your apps cleaner, reusable, and faster. ⚡

---

# ⚡ **11. Custom Hooks & Performance Optimization**

---

## 🔹 **A. Custom Hooks**

### 🧠 What is a Custom Hook?

A **custom hook** is a **reusable function** that uses built-in hooks (like `useState`, `useEffect`, etc.) to encapsulate logic.

- Starts with `use`
- Allows code **reusability** across components
- Keeps components **clean and readable**

---

### 🔹 Example: Custom Hook for Window Width

```jsx
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Usage in component
function App() {
  const width = useWindowWidth();

  return <h1>Window width: {width}px</h1>;
}
```

✅ Explanation:

- `useWindowWidth` can now be reused in **any component**
- Encapsulates logic outside the component for **cleaner code**

---

### 🔹 Example: Fetch Data Hook

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Usage
function Users() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

> Custom hooks improve **code reuse** and **separation of concerns**.

---

## 🔹 **B. Performance Optimization**

React has built-in hooks and techniques to **optimize performance**, especially for **heavy components**.

---

### 1️⃣ `React.memo` (Component Memoization)

Prevents **unnecessary re-renders** if props haven’t changed.

```jsx
const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <p>Child: {name}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Parent Count: {count}</button>
      <Child name="John" />
    </div>
  );
}
```

- `Child` only re-renders if `name` changes
- Optimizes performance for **large component trees**

---

### 2️⃣ `useCallback` (Memoize Functions)

```jsx
import { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Function is stable across renders

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child handleClick={handleClick} />
    </div>
  );
}
```

- Prevents **re-creating functions** on every render
- Useful with `React.memo` children

---

### 3️⃣ `useMemo` (Memoize Expensive Values)

```jsx
import { useState, useMemo } from "react";

function App() {
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
```

- `useMemo` recalculates **only when dependencies change**
- Avoids **re-computing heavy operations** on every render

---

### 🔨 Mini Exercise

1. Build a **custom hook** for fetching data from any API.
2. Use it in two different components to **display different data**.
3. Optimize a heavy component using `React.memo` + `useMemo` + `useCallback`.

---

We’ve now covered **Advanced React Topics**:

- Custom Hooks
- Memoization (`React.memo`, `useCallback`, `useMemo`)
- Performance optimization patterns

Next, we can explore **React best practices, testing, and real-world project structure** to wrap up your React mastery.

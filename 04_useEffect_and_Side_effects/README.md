Perfect! Let’s move into **useEffect and side effects**, one of the most important hooks in React for handling things **outside of rendering**, like API calls, timers, or subscriptions. ⚡

---

# ⚡ **6. useEffect & Side Effects**

### 🧠 What is a Side Effect?

A **side effect** is any operation that affects something **outside** of the component, such as:

- Fetching data from an API
- Updating the DOM directly
- Subscribing to events
- Setting a timer

React components should **stay pure**, meaning they just return UI based on props and state. `useEffect` is how we handle side effects **without breaking this rule**.

---

### 🔹 Basic Syntax of useEffect

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count changed");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

✅ What happens:

- Every time the component **renders**, the code inside `useEffect` runs.

---

### 🔹 useEffect with Dependency Array

```jsx
useEffect(() => {
  console.log("This runs only when count changes");
}, [count]);
```

- `[count]` is the **dependency array**
- The effect runs **only when `count` changes**
- If the array is `[]`, the effect runs **once on mount**
- If you omit it, it runs **after every render**

---

### 🔹 Cleaning Up Effects

Some effects need **cleanup** to avoid memory leaks, like timers or subscriptions:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Cleanup function
  return () => clearInterval(timer);
}, []); // Runs once on mount
```

- `return () => ...` is called when the component **unmounts** or before the effect runs again

---

### 🔹 Example: Fetching Data from an API

```jsx
import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Run once on mount

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

✅ Key points:

- `useEffect` handles **asynchronous side effects**
- State updates trigger a **re-render** automatically
- Dependency array controls **when the effect runs**

---

### 🔹 Common Patterns

1. **Run once on mount**: `useEffect(() => { ... }, [])`
2. **Run on specific changes**: `useEffect(() => { ... }, [someState])`
3. **Run on every render**: `useEffect(() => { ... })` (no dependency array)
4. **Cleanup before unmount**: `return () => { ... }`

---

### ⚡ Mini Exercise

Create a component that:

1. Shows the **current time**
2. Updates it **every second** using `setInterval`
3. Properly cleans up the interval when the component unmounts

---

After mastering **useEffect**, we can move to **Forms, Controlled Components, and Lifting State Up**, which are essential for handling user input and shared state.

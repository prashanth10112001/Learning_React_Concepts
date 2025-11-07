Awesome 😄 — let’s continue!
Now we’ll dive into two of the **most important React concepts**:

# ⚙️ **Props & State**

---

## 🧩 1. **Props (short for “Properties”)**

### 🧠 What are Props?

**Props** let you **pass data** from one component (the parent) to another (the child).
They make components **reusable** and **dynamic**.

You can think of props as **function arguments**.

---

### 📘 Example:

```jsx
// Parent component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

// Child component
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

✅ Output:

```
Hello, Alice!
Hello, Bob!
```

> 🧠 Note: Props are **read-only** — you cannot modify them inside the child component.

---

### 💡 Using **Destructuring** for cleaner code:

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```

---

## 🧠 2. **State**

### What is State?

**State** is used to **store data** that can **change over time** inside a component.
When the state changes, **React automatically re-renders** the component to reflect the new data.

---

### 🪄 useState Hook

In **functional components**, we use the `useState()` hook.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

✅ Explanation:

- `count` → current state value
- `setCount` → function to update the state
- `useState(0)` → initial state = 0
- When you click the button → state changes → UI updates

---

### 🔁 Updating State based on Previous Value

If your new state depends on the old state, use the **callback form**:

```jsx
setCount((prevCount) => prevCount + 1);
```

---

### ⚠️ Important Notes:

- You **never mutate** state directly:

  ```js
  count = count + 1; ❌
  setCount(count + 1); ✅
  ```

- State updates are **asynchronous** — React batches them for performance.
- Changing state triggers a **re-render** of that component only.

---

## 🧩 Combining Props and State

Example:

```jsx
function Welcome({ name }) {
  const [greeting, setGreeting] = useState("Hello");

  return (
    <div>
      <p>
        {greeting}, {name}!
      </p>
      <button onClick={() => setGreeting("Hi")}>Change Greeting</button>
    </div>
  );
}

function App() {
  return <Welcome name="Charlie" />;
}
```

✅ Output initially:

```
Hello, Charlie!
```

When you click the button → changes to:

```
Hi, Charlie!
```

---

## 🔨 Mini Exercise (optional)

Try creating a small component on your own:

> 🧭 **Task:**
> Make a `LikeButton` component that:

- starts with `0` likes
- increments likes each time the button is clicked
- shows: “👍 Likes: X”

---

Would you like me to go step-by-step through **Event Handling & Conditional Rendering** next (the next building blocks after props/state)?

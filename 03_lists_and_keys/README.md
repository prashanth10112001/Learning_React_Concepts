Great! Let’s dive into **Lists & Keys**, a fundamental concept in React for rendering dynamic content. 🚀

---

# 📝 **5. Lists & Keys in React**

When you have **multiple items** (like tasks, products, or users), React can render them dynamically using **lists**.

---

## 🔹 Rendering a List

You can use JavaScript’s `map()` inside JSX:

```jsx
function FruitsList() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

❌ Problem: React will show a **warning** in the console:

```
Warning: Each child in a list should have a unique "key" prop.
```

---

## 🔹 Why Keys Are Important

Keys help React **identify which items changed, added, or removed**, which improves **performance** and prevents bugs.

- Should be **unique** among siblings
- Can be an **id** or unique string
- Avoid using **index** as key unless there’s no other option

---

### 📘 Example with Keys

```jsx
function FruitsList() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
```

✅ Output:

```
- Apple
- Banana
- Orange
- Mango
```

> Now React can efficiently update the list if something changes.

---

## 🔹 Dynamic List with State

Let’s combine **state + list rendering + event handling**:

```jsx
import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
  ]);

  const addTask = () => {
    const newTask = { id: Date.now(), text: "New Task" };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

- `tasks` is stored in **state**
- Clicking **Add Task** updates the state → React re-renders the list
- Each `<li>` has a **unique key**

---

### ⚡ Mini Exercise

Create a small **shopping list**:

1. Start with a few items
2. Render them as a list
3. Add a button to **remove an item**

> Tip: Use `filter()` for removing items by `id`.

---

We’ve now covered the **core React basics**:

1. Components & JSX
2. Props
3. State
4. Event Handling
5. Conditional Rendering
6. Lists & Keys

---

Next, we can move to **Intermediate Concepts** like:

- **useEffect** (handling side effects)
- **Forms & Controlled Components**
- **Lifting State Up**

Awesome! Let’s dive into **Forms, Controlled Components, and Lifting State Up** — key concepts for handling **user input** and **shared state** in React. ⚡

---

# 📝 **7. Forms & Controlled Components**

### 🔹 Controlled vs Uncontrolled Components

**Controlled Component:**

- React **controls the value** of the input via state
- The input value **always comes from React state**
- Easier to validate, manipulate, and submit

**Uncontrolled Component:**

- The DOM manages the input value
- You use `ref` to access the value
- Less common in modern React

---

### 🔹 Example: Controlled Input

```jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name} // Controlled by React state
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

✅ Explanation:

- `value={name}` binds the input to React state
- `onChange` updates the state whenever the user types
- `handleSubmit` handles form submission

---

### 🔹 Handling Multiple Inputs

```jsx
function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
```

> Using `[e.target.name]` allows you to **dynamically update any field** in one function.

---

# ⚡ **8. Lifting State Up**

Sometimes multiple components need to **share the same state**.
React recommends **lifting the state up** to the **closest common ancestor**.

---

### 🔹 Example: Two Components Sharing State

```jsx
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [tempC, setTempC] = useState("");
  const [tempF, setTempF] = useState("");

  const handleCelsiusChange = (value) => {
    setTempC(value);
    setTempF(value !== "" ? (value * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (value) => {
    setTempF(value);
    setTempC(value !== "" ? ((value - 32) * 5) / 9 : "");
  };

  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        temperature={tempC}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={tempF}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}
```

✅ Explanation:

- Both inputs share state via **Calculator**
- Changing one input updates the other
- This is **lifting state up** in action

---

### 🔨 Mini Exercise

Build a simple **login form** with:

1. Controlled inputs for **email** and **password**
2. A **submit button** that logs the values
3. Optional: Add validation to check for empty fields

---

We’ve now covered:

1. Props & State
2. Event Handling
3. Conditional Rendering
4. Lists & Keys
5. useEffect
6. Forms & Lifting State Up

Next, we can move to **React Router** for page navigation or start exploring **advanced hooks and context**.

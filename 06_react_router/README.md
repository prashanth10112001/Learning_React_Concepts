Perfect! Let’s dive into **React Router**, the standard way to handle **navigation and routing** in React apps. 🚀

---

# 🌐 **9. React Router (Routing in React)**

### 🧠 What is React Router?

React Router lets you build **multi-page React apps** without reloading the page.
It maps **URLs to components** and handles navigation **client-side**.

---

### 🔹 Installation

```bash
npm install react-router-dom
```

> Make sure you are using **v6+**, which has slightly different syntax from older versions.

---

### 🔹 Basic Setup

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

✅ Explanation:

- `<Router>` wraps your app for routing
- `<Link>` creates **navigation links** (like `<a>` but without page reload)
- `<Routes>` contains all the `<Route>`s
- `path` → the URL path
- `element` → the component to render

---

### 🔹 Dynamic Routes

```jsx
function UserProfile({ id }) {
  return <h2>User ID: {id}</h2>;
}

// In App
<Route path="/user/:id" element={<UserProfileWrapper />} />;

// Wrapper to use useParams
import { useParams } from "react-router-dom";

function UserProfileWrapper() {
  const { id } = useParams();
  return <UserProfile id={id} />;
}
```

> Visiting `/user/42` → shows `User ID: 42`

---

### 🔹 Navigate Programmatically

```jsx
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic...
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

### 🔹 404 Not Found Page

```jsx
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

// Add to Routes
<Route path="*" element={<NotFound />} />;
```

> `*` matches any undefined route

---

### 🔹 Nested Routes

```jsx
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Routes>
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
```

- Visiting `/dashboard/stats` → renders **Stats** inside Dashboard
- Nested routing is powerful for **layouts & dashboards**

---

### 🔨 Mini Exercise

Build a small **React Router app**:

1. Three pages: Home, About, Contact
2. Navigation links between them
3. Add a 404 page for unknown routes

---

We’ve now covered **routing**, which is crucial for real React apps.

Next, we can explore **Advanced React Concepts**:

- **Context API** (for global state)
- **useReducer** (complex state logic)
- **Custom Hooks**
- **Performance Optimization (memo, useMemo, useCallback)**

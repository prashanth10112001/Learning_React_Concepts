import React, { useState } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  let content;
  if (page === "home") content = <Home />;
  else if (page === "about") content = <About />;
  else if (page === "contact") content = <Contact />;

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>🌐 My React Single Page App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>
      <hr />
      {content}
    </div>
  );
}

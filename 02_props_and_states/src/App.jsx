import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import LikeButton from "./components/LikeButton";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌐 Props Example</h1>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
      <Counter />
      <Counter2 />

      <h1>❤️ Props + State Example</h1>
      <LikeButton label="Post 1" />
      <LikeButton label="Post 2" />
      <LikeButton label="Post 3" />
    </div>
  );
}

import React, { useState } from "react";

export default function LikeButton({ label }) {
  const [likes, setLikes] = useState(0); // State inside child

  return (
    <div style={{ margin: "10px" }}>
      <h2>{label}</h2> {/* Prop from parent */}
      <p>Likes: {likes}</p> {/* State */}
      <button onClick={() => setLikes(likes + 1)}>Like ❤️</button>
    </div>
  );
}

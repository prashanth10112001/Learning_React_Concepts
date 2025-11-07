import React from "react";
const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <p>Child: {name}</p>;
});

export default Child;
// Renders every time counter changes
// const Child = ({ name }) => {
//   console.log("Child rendered");
//   return <p>Child: {name}</p>;
// };

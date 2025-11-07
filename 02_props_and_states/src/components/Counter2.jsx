export default function Counter2() {
  let count = 0; // plain variable

  const increase = () => {
    count = count + 1;
    console.log(count); // value updates in memory
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

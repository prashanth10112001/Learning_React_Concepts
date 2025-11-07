// export default function Welcome({ name }) {
//   return <h2>Hello, {name}! 👋</h2>;
// }

export default function Welcome(props) {
  return <h2>Hello, {props.name}! 👋</h2>;
}

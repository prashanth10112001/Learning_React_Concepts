import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic...
    navigate("/"); // Redirect to dashboard after login
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;

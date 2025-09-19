import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [users, setUsers] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const userWithPasswords = response.data.map((u, i) => ({
          ...u,
          password: `pass${i + 1}`,
        }));

        setUsers(userWithPasswords);
      } catch (err) {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = () => {
    const foundUser = users.find(
      (u) =>
        u.username.toLowerCase() === usernameInput.toLowerCase() &&
        u.password === passwordInput
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      navigate("/Home");
    } else {
      setError("Invalid username or password");
    }
  };

  if (isLoading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="title">Login</h1>
        <p className="subtitle">Please login to continue</p>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Enter Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="input"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="input"
        />

        <button onClick={handleLogin} className="btnn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

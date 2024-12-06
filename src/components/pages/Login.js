import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { loginUser } from "../../firebaseConfig";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      dispatch(login({ email: user.email }));
      Swal.fire({
        title: "Login success",
        text: "Product added to the cart!",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          maxLength={8}
          required
        />
        <div>
          <p>
            If you have no account so get{" "}
            <span className="underline">
              <Link to="/signup">signup</Link>
            </span>{" "}
          </p>
          <button
            type="submit"
            className="w-full mt-[10px] bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

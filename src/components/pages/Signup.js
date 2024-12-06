import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { signUp } from "../../firebaseConfig";
import Swal from "sweetalert2";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      await signUp(email, password);
      dispatch(login({ email, phoneNumber }));
      Swal.fire({
        title: "Signup success",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      console.error("Signup Error:", error.message);
      Swal.fire({
        title: "Signup failed",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          maxLength={8}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          maxLength={10}
          required
        />
        <div>
          <p>
            If you have account so get{" "}
            <span className="underline">
              <Link to="/login">Login</Link>
            </span>{" "}
          </p>
          <button
            type="submit"
            className="mt-[30px] w-full bg-blue-500 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

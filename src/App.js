import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cart from "./components/Cart";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import Signup from "./components/pages/Signup";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

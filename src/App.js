import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Customer/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dishes from "./pages/Customer/Dishes";
import Cart from "./pages/Customer/Cart";
import BuyNow from "./pages/Customer/BuyNow"; 
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";

function App() {
  return (
    <Routes>
      {/* Routes with Navbar */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/dishes"
        element={
          <MainLayout>
            <Dishes />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <Cart />
          </MainLayout>
        }
      />
      <Route
        path="/order"
        element={
          <MainLayout>
            <BuyNow />
          </MainLayout>
        }
      />

      {/* Routes without Navbar */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;

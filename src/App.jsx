import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Product onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

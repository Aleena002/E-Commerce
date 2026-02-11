import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// Import hero image
import heroImage from "../assets/hero.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main className="text-center">
        <img 
          src={heroImage} 
          alt="Shopping Banner" 
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover", marginBottom: "20px" }}
        />

        <h1 className="mb-4">Smart Shopping Starts Here</h1>
        <p className="mb-4">Discover the best products at affordable prices.</p>
        <Button onClick={() => navigate("/products")} variant="primary">Shop Now</Button>
      </main>
    </>
  );
}

export default Home;

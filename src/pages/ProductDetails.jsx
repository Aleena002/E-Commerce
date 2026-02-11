import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>Price: Rs {product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;

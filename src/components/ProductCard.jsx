import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>

      <div style={styles.btnGroup}>
        <button style={styles.viewBtn}>View Details</button>
        <button style={styles.cartBtn} onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    marginBottom: "10px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  viewBtn: {
    flex: 1,
    padding: "8px",
    cursor: "pointer",
  },
  cartBtn: {
    flex: 1,
    padding: "8px",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ProductCard;

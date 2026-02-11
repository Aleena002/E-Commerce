import React from "react";
import ProductCard from "../components/ProductCard";

// Import images from assets folder 
import earbuds from "../assets/earbuds.jpg";
import miniSpeaker from "../assets/mini-speaker.jpg";
import watch from "../assets/watch-image.jpg";
import wirelessHeadPhone from "../assets/wireless-headphones.jpg";

const Product = ({ onAddToCart }) => {
  const products = [
    { id: 1, 
      name: "earBuds", 
      price: 120000, 
      image: earbuds 
    },
    { 
      id: 2, 
      name: "mini-speaker", 
      price: 220000, 
      image: miniSpeaker 
    },
    { 
      id: 3, 
      name: "watch", 
      price: 35000, 
      image: watch 
    },
    { id: 4, 
      name: "wireless-headphone", 
      price: 35000, 
      image: wirelessHeadPhone 
    },
  ];

  return (
    <section style={styles.section}>
      <h2>🔥 Featured Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
};

export default Product;

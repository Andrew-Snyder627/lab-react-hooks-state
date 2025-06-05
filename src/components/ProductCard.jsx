import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, inCart, handleCartToggle }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ""} ${
        inCart ? styles.inCart : ""
      }`}
    >
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      {/* TODO: Implement Add to Cart button functionality */}
      <button
        disabled={!product.inStock}
        onClick={() => handleCartToggle(product)}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;

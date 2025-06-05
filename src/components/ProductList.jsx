import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, cart, handleCartToggle }) => {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={!!cart.find((item) => item.id === product.id)}
          handleCartToggle={handleCartToggle}
        />
      ))}
    </div>
  );
};

export default ProductList;

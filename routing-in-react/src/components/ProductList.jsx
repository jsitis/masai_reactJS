import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function fetchData(params) {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    setProducts(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} width="150" alt="" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductList;

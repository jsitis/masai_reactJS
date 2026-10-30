import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  async function fetchData() {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let result = await response.json();
    console.log(result);
    setProduct(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!product) return <h1>Loading....</h1>;

  return (
    <div>
      <button onClick={() => navigate("/")}>Go back</button>
      <h2>{product.title}</h2>
      <img src={product.image} width={200} alt="" />
      <h3>${product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;

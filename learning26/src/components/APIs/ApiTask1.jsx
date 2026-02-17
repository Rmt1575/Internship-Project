import axios from "axios";
import React, { useState } from "react";

export const ApiTask1 = () => {
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    console.log(response.data.products);
    setproducts(response.data.products);
  };

  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>API TASK 1</h1>
      <br />
      <button
        style={{ color: "skyblue" }}
        onClick={() => {
          getProducts();
        }}
      >
        GET PRODUCTS
      </button>
      <br />
      {products.length > 0 && (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>DISCOUNT</th>
              <th>RATING</th>
              <th>STOCK</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.discountPercentage}%</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
              </tr>
            })
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

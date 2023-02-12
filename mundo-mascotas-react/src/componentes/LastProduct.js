import React, { useState, useEffect } from "react";

const LastProduct = () => {
  const [products, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:3003/api/products")
      .then(response => response.json())
      .then(data => {
        setProduct(data[products.length - 1]);
      });
  }, []);

  return (
    <div>
      <h2>Último producto creado</h2>
      {products && (
        <>
          <p>Nombre: {products.name}</p>
          <p>Descripción: {products.description}</p>
          <p>Precio: {products.price}</p>
        </>
      )}
    </div>
  );
};

export default LastProduct;
import React from 'react';
import { useState, useEffect } from "react";

const LastProduct = (props) => {
  const [lastProduct, setLastProducto] = useState({});

  useEffect(() => {
    fetch("http://localhost:3003/api/products")
      .then(response => response.json())
      .then((data) => {
        setLastProducto(data.data[data.data.length-1]);
      })
      .catch((error) => console.log(error));
  },[]);
  
    return (
      <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Lo último de Mundo Mascotas Osspret Pack Shampoo Pulguicida para Gatos 250 CC
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img src="./images/osspret_double-removebg-preview1-210aeed0bd80544b0315665967054717-640-0.webp"
            />
          </div>
          <p>$2000</p>
          <p>Osspret</p>
          <p>Shampoo Antipulgas</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View product detail
          </a>
        </div>
      </div>
    </div>
  );
}
  export default LastProduct;
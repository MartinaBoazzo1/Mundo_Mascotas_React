import { useEffect } from 'react';
import './App.css';
import Productos from './componentes/Productos';
import React, { useState } from 'react';
import NavBar from './componentes/NavBar';
import BoxTotales from './componentes/BoxTotales';
import LastProduct from './componentes/LastProduct';

function App() {
  const [productos, setProducts]= useState([]);

  const initialurl = "http://localhost:3003/api/products";
  
  const fetchProducts = (url) =>{
    fetch(url)
    .then (response => response.json())
    .then ((data) => setProducts (data.products))
    .catch ((error) => console.log(error))
  };
  useEffect(() =>{
    fetchProducts(initialurl);
  },[])

  const [count, setTotalProducts]= useState([]);
  const totalProductos = "http://localhost:3003/api/products";
  
  const countProducts = (url) =>{
    fetch(url)
    .then (response => response.json())
    .then (data => setTotalProducts (data.count))
    .catch (error => console.log(error))
  };
  useEffect(() =>{
    countProducts(totalProductos);
  },[])

  return (
    <div className="Contenedor">
      <NavBar/>
      <article className='Hijo'>
      <BoxTotales />
      </article>
      <article>
      <LastProduct />
      </article>
      <article>
      <Productos productos={productos}/>
      </article>
      </div> 
  );
}

export default App;

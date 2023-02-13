import { useEffect } from 'react';
import './App.css';
import Productos from './componentes/Productos';
import React, { useState } from 'react';
import NavBar from './componentes/NavBar';
import BoxTotales from './componentes/BoxTotales';
import LastProduct from './componentes/LastProduct';
import Usuarios from './componentes/Usuarios';
import PanelProductos from './componentes/PanelProductos';
import BoxTotalesCategorias from './componentes/BoxCategorias'

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

  const [usuarios, setUsuarios]= useState([]);

  const initialurlusers = "http://localhost:3003/api/users";
  
  const fetchUsuarios = (url) =>{
    fetch(url)
    .then (response => response.json())
    .then ((data) => setUsuarios (data.users))
    .catch ((error) => console.log(error))
  };
  useEffect(() =>{
    fetchUsuarios(initialurlusers);
  },[])

  return (
    <div className="Contenedor">
      <NavBar/>
      <article className='Hijo'>
      <p className='card-header py-3'>Totales</p>
      <BoxTotales />
      </article>
      <article className='Hijo'>
      <p className='card-header py-3'>Totales por categoria</p>
      <BoxTotalesCategorias />
      </article>
      <article>
      <LastProduct />
      </article>
      <article className='.list-group-flush'>
        <p className='card-header py-3'>Productos</p>
      <Productos productos={productos}/>
      </article>
      <article>
      <p className='card-header py-3'>Usuarios</p>
      <Usuarios usuarios={usuarios}/>
      </article>
      </div> 
  );
}

export default App;

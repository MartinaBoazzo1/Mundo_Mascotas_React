import React from 'react';
import PropTypes from 'prop-types';

const categorias = [
  { id: 1, nombre: 'Alimento' },
  { id: 2, nombre: 'Juguetes' },
  { id: 3, nombre: 'Accesorios' },
  { id: 4, nombre: 'Higiene' },
  { id: 5, nombre: 'Antipulgas' },
  // ...
];

const Productos = ({ productos }) => {
  return (
    <>
      {productos.map((product, index) => {
        let nombre_categoria = '';
        categorias.forEach(categoria => {
          if (categoria.id === product.id_category) {
            nombre_categoria = categoria.nombre;
          }
        });
        
        return (
          <div className="" key={index}>
            <div className="card" style={{minWidth:"200px"}}>
              <img src={product.image} alt="" />
              <div className='card-body'>
              <h5>Producto:  {product.name}</h5>
              <p>Precio: ${product.price}</p>
              <p>Categoria: {nombre_categoria}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

Productos.propTypes = {
  productos: PropTypes.array.isRequired,
};

export default Productos;
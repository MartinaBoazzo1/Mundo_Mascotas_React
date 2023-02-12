import React from 'react';
import PropTypes from 'prop-types';

const Productos = ({ productos }) => {
  console.log(productos);
  return (
    <>
      {productos.map((product, index) => (
        <div className="col" key={index}>
          <div className="card" style={{minWidth:"200px"}}>
            <img src={product.image} alt="" />
            <div className='card-body'>
            <h5>Producto:  {product.name}</h5>
            <p>Descripcion: {product.description}</p>
            <p>Precio: ${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Productos.propTypes = {
  productos: PropTypes.array.isRequired,
};

export default Productos;
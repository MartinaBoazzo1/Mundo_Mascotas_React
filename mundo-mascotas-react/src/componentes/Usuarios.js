import React from 'react';
import PropTypes from 'prop-types';

const Usuarios = ({ usuarios }) => {
  return (
    <>
      {usuarios.map((usuario, index) => (
        <div className="col" key={index}>
          <div className="usuarios">
            <img src={usuario.image} alt="" />
            <div className='card-body'>
            <h5>Usuario:  {usuario.name} {usuario.surname}</h5>
            <p>Email: {usuario.email}</p>
            <p>DNI: {usuario.dni}</p>
            <p>Telefono: {usuario.telephone}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Usuarios.propTypes = {
    usuarios: PropTypes.array.isRequired,
};

export default Usuarios;
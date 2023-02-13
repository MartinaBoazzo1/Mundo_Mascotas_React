import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function BoxTotales({count}) {
  
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="./images/Perfil-de-usuario.webp" />
        <Card.Body>
          <Card.Title>Usuarios</Card.Title>
          <Card.Text>
            En Mundo Mascotas contamos con 12 usuarios. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/NVWQSYGX3RC7ZBEHLPLDVXA3PU.jpeg" />
        <Card.Body>
          <Card.Title>Productos</Card.Title>
          <Card.Text>
          En Mundo Mascotas contamos con 24 productos. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/categorias_de_producto.png" />
        <Card.Body>
          <Card.Title>Categorias</Card.Title>
          <Card.Text>
          En Mundo Mascotas contamos con 5 categorias. 
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default BoxTotales;
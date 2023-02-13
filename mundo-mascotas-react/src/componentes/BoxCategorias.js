import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function BoxTotalesCategorias({count}) {
  
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="./images/alimento.webp" />
        <Card.Body>
          <Card.Title>Alimento</Card.Title>
          <Card.Text>
            En Mundo Mascotas contamos con 5 productos en nuestra categoria de alimentos. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/F73PMPBP6ZEFBFX5OHTMRCYL2I.avif" />
        <Card.Body>
          <Card.Title>Juguetes</Card.Title>
          <Card.Text>
          En Mundo Mascotas contamos con 5 productos en nuestra categoria de juguetes. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/accesorios-mascotas-concepto-naturaleza-muerta-alimento-seco-mascotas_23-2148949564.avif" />
        <Card.Body>
          <Card.Title>Accesorios</Card.Title>
          <Card.Text>
          En Mundo Mascotas contamos con 5 productos en nuestra categoria de accesorios. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/5fa52f5842d6f.jpeg" />
        <Card.Body>
          <Card.Title>Higiene</Card.Title>
          <Card.Text>
          En Mundo Mascotas contamos con 5 productos en nuestra categoria de higiene. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/como_elegir_un_collar_antipulgas_para_perros_41880_orig.jpeg" />
        <Card.Body>
          <Card.Title>Antipulgas</Card.Title>
          <Card.Text>
          En Mundo Mascotas contamos con 4 productos en nuestra categoria de antipulgas. 
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default BoxTotalesCategorias;
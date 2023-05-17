import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import "./ProdutosPage.css"

const ProdutosPage = () => {
  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      season: 'verao',
      image: 'https://via.placeholder.com/350x250',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      season: 'primavera',
      image: 'https://via.placeholder.com/350x250',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      season: 'outono',
      image: 'https://via.placeholder.com/350x250',
    },
    // Add more products here
  ];

  // State for selected season filter
  const [selectedSeason, setSelectedSeason] = useState('');

  // Filter products based on selected season
  const filteredProducts = selectedSeason
    ? products.filter((product) => product.season === selectedSeason)
    : products;

  return (
    <Container>
      <h1 className="text-center mt-5">Product Page</h1>

      <Form.Select
        className="my-4"
        onChange={(e) => setSelectedSeason(e.target.value)}
        value={selectedSeason}
      >
        <option value="">Todas as Épocas</option>
        <option value="verao">Verão</option>
        <option value="primavera">Primavera</option>
        <option value="outono">Outono</option>
        {/* Add more season options here */}
      </Form.Select>

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} className="card-image" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="card-title">{product.name}</Card.Title>
                  <Card.Text className="card-description">{product.description}</Card.Text>
                </div>
                <Button variant="primary" className="align-self-center">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProdutosPage;

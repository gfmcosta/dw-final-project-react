import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import "./ProdutosPage.css"

class ProdutosPage extends Component {
    state = {
      selectedSeason: '',
      filteredProducts: null,
      products : [
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
      ],
    };

  // Handler for changing selected season
  handleSeasonChange = (e) => {
    this.setState({ selectedSeason: e.target.value });
  };

  render() {
    const filteredProducts = this.state.selectedSeason
      ? this.state.products.filter((product) => product.season === this.state.selectedSeason)
      : this.state.products;

    return (
      <Container>
        <h1 className="text-center mt-5">Product Page</h1>
        <Form.Select
          className="my-4"
          onChange={this.handleSeasonChange}
          value={this.state.selectedSeason}
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
  }
}

export default ProdutosPage;

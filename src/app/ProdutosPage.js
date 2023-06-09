import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import "./ProdutosPage.css"

class ProdutosPage extends Component {
    state = {
      selectedSeason: '',
      filteredProducts: null,
      // products : [
      //   {
      //     id: 1,
      //     name: 'Product 1',
      //     description: 'Description of Product 1',
      //     season: 'verao',
      //     image: 'https://via.placeholder.com/350x250',
      //   },
      //   {
      //     id: 2,
      //     name: 'Product 2',
      //     description: 'Description of Product 2',
      //     season: 'primavera',
      //     image: 'https://via.placeholder.com/350x250',
      //   },
      //   {
      //     id: 3,
      //     name: 'Product 3',
      //     description: 'Description of Product 3',
      //     season: 'outono',
      //     image: 'https://via.placeholder.com/350x250',
      //   },
      //   // Add more products here
      // ],
      products : [],
    };

  // Handler for changing selected season
  handleSeasonChange = (e) => {
    this.setState({ selectedSeason: e.target.value });
  };

  async componentDidMount(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let res = await fetch(`http://localhost:5072/API/Products`, requestOptions).catch(error => console.log('error', error));;
    let result = await res.json();
    if (res.status === 200){
      console.log(result.$values);
      this.setState({products: result.$values});
    }
  }
 

  render() {
    // const allProducts = this.state.products;
    const filteredProducts = this.state.selectedSeason
      ? this.state.products.filter((product) => product.seasonFK == this.state.selectedSeason)
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
          <option value="2">Verão</option>
          <option value="1">Primavera</option>
          <option value="3">Outono</option>
        </Form.Select>

        <Row>
          {filteredProducts.map((product) =>(
            <Col md={4} key={product.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={`http://localhost:5072/images/${product.imagePath}`} className="card-image" style={{ width: "150px", height: "50px", objectFit: "cover" }}/>
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

import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import "./ProdutosPage.css"
import { hover } from '@testing-library/user-event/dist/hover';
import { NavLink } from "react-router-dom";
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
    const searchParams = new URLSearchParams(window.location.search);
    const s = searchParams.get('season');
    if(parseInt(s)<5 && parseInt(s)>0 ){
      this.setState({selectedSeason: s});
    }

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let res = await fetch(`http://localhost:5072/API/Products`, requestOptions).catch(error => console.log('error', error));;
    let result = await res.json();
    if (res.status === 200){
      console.log(result.$values);
      this.setState({products: result});
    }
  
  }
 
  
  render() {
    // const allProducts = this.state.products;
    const filteredProducts = this.state.selectedSeason
      ? this.state.products.filter((product) => product.seasonFK == this.state.selectedSeason)
      : this.state.products;
    return (
      <Container className="container">
        <h1 className="text-center mt-5">Product Page</h1>
        <Form.Select
          className="my-4"
          onChange={this.handleSeasonChange}
          value={this.state.selectedSeason}
          style={{marginTop:"5%!important"}}
        >
          <option value="">Todas as Épocas</option>
          <option value="2">Verão</option>
          <option value="1">Primavera</option>
          <option value="3">Outono</option>
        </Form.Select>

        <div style={{display: "grid", justifyContent:"center",
                gridTemplateColumns: "0.25fr 0.25fr 0.25fr 0.25fr",
                gridTemplateRows: "repeat(auto, 2fr)", gap: "20px 20px",
                marginBottom:"30%"}}>
          {filteredProducts.map((product) =>(
              <Card className="h" style={{height: "500px"}}>
                <div style={{minHeight:"75%", maxHeight:"75%"}}>
                <NavLink to={`/product?id=${product.id}`}>
                  <Card.Img variant="top" src={`http://localhost:5072/images/${product.imagePath}`} 
                    className="card-image" 
                    style={{maxHeight:"100%", minHeight:"100%", height: "auto", objectFit: "cover", alignSelf:"center"}}
                  />
                </NavLink></div>
                <Card.Body className="d-flex flex-column justify-content-between" style={{textAlign:"left", minHeight:"24%", maxHeight:"24%"}}>
                  <div>
                    <Card.Title className="card-title" style={{font:"message-box", cursor:"pointer"}} >{product.name}</Card.Title>
                    <Card.Text className="card-description">{product.description}</Card.Text>
                    <Card.Text className="card-price">{product.price}€</Card.Text>
                  </div>
                  <Button variant="primary" className="align-self-center" style={{ display: 'none' }}>Comprar</Button>
                </Card.Body>
              </Card>
          ))}
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
      </Container>
    );
  }
}

export default ProdutosPage;

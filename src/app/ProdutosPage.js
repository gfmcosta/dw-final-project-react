import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Toast,
} from "react-bootstrap";
import "./ProdutosPage.css";
import { hover } from "@testing-library/user-event/dist/hover";
import { NavLink } from "react-router-dom";
class ProdutosPage extends Component {
  state = {
    selectedSeason: "",
    filteredProducts: null,
    products: [],
    showToast: false,
    toastMessage: "",
    toastType: "",
  };

  // Handler for changing selected season
  handleSeasonChange = (e) => {
    this.setState({ selectedSeason: e.target.value });
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const s = searchParams.get("season");
    if (parseInt(s) < 5 && parseInt(s) > 0) {
      this.setState({ selectedSeason: s });
    }

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      `http://atsoc.somee.com/backend/API/Products`,
      requestOptions
    ).catch((error) => console.log("error", error));
    console.log(res);
    if (res !== undefined && res.status === 200) {
      let result = await res.json();
      console.log(result.$values);
      this.setState({ products: result });
    } else {
      this.setState({
        showToast: true,
        toastMessage: "Ocorreu um erro ao carregar os produtos",
        toastType: "danger",
      });
    }
  }

  render() {
    // const allProducts = this.state.products;
    const filteredProducts = this.state.selectedSeason
      ? this.state.products.filter(
          (product) => product.seasonFK == this.state.selectedSeason
        )
      : this.state.products;
    return (
      <Container className="container">
        <h1 className="text-center mt-5">Product Page</h1>
        <Form.Select
          className="my-4"
          onChange={this.handleSeasonChange}
          value={this.state.selectedSeason}
          style={{ marginTop: "5%!important" }}
        >
          <option value="">Todas as Épocas</option>
          <option value="2">Verão</option>
          <option value="1">Primavera</option>
          <option value="3">Outono</option>
        </Form.Select>

        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "0.25fr 0.25fr 0.25fr 0.25fr",
            gridTemplateRows: "repeat(auto, 2fr)",
            gap: "20px 20px",
            marginBottom: "30%",
          }}
        >
          {filteredProducts.map((product) => (
            <Card className="h" style={{ height: "500px" }}>
              <div style={{ minHeight: "75%", maxHeight: "75%" }}>
                <NavLink to={`/product?id=${product.id}`}>
                  <Card.Img
                    variant="top"
                    src={`http://atsoc.somee.com/backend/images/${product.imagePath}`}
                    className="card-image"
                    style={{
                      maxHeight: "100%",
                      minHeight: "100%",
                      height: "auto",
                      objectFit: "cover",
                      alignSelf: "center",
                    }}
                  />
                </NavLink>
              </div>
              <Card.Body
                className="d-flex flex-column justify-content-between"
                style={{
                  textAlign: "left",
                  minHeight: "24%",
                  maxHeight: "24%",
                }}
              >
                <div>
                  <Card.Title
                    className="card-title"
                    style={{ font: "message-box", cursor: "pointer" }}
                  >
                    {product.name}
                  </Card.Title>
                  <Card.Text className="card-description">
                    {product.description}
                  </Card.Text>
                  <Card.Text className="card-price">{product.price}€</Card.Text>
                </div>
                <Button
                  variant="primary"
                  className="align-self-center"
                  style={{ display: "none" }}
                >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Toast
          show={this.state.showToast}
          onClose={() => this.setState({ showToast: false })}
          delay={5000}
          autohide
          style={{ position: "fixed", top: "18%", right: "20px" }}
          bg={this.state.toastType}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Sistema</strong>
            <small>Há 1 segundo atrás</small>
          </Toast.Header>
          <Toast.Body>{this.state.toastMessage}</Toast.Body>
        </Toast>
      </Container>
    );
  }
}

export default ProdutosPage;

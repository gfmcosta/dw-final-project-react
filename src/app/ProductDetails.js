import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  Row,
  InputGroup,
  FormControl,
  Toast,
} from "react-bootstrap";
import "./ProductDetails.css";
import { FaShoppingCart } from "react-icons/fa";

class ProductDetails extends Component {
  state = {
    id: "",
    products: "",
    sizes: ["S", "M", "L"],
    selectedSize: "",
    quantity: "",
    cartClick: "",
    showToast: false,
    toastMessage: "",
    toastType: "",
  };

  handleQuantity = (e) => {
    const enteredValue = e.target.value;
    const { products } = this.state;
    let updatedValue;

    if (enteredValue >= 1 && enteredValue <= products.quantity) {
      updatedValue = enteredValue;
    } else {
      updatedValue = products.quantity;
    }

    this.setState({ quantity: updatedValue }, () => {
      console.log(this.state.quantity);
    });
  };

  handleClick = (size) => {
    this.setState({ selectedSize: size }, () => {
      console.log(this.state.selectedSize); // Print the selected size
    });
  };

  handleCartClick = () => {
    this.setState({ cartClick: true });
    if (sessionStorage.getItem("user") == null) {
      alert("Inicie sessão para adicionar ao carrinho");
      window.location.href = "/login";
    } else if (this.state.selectedSize == "") {
      this.setState({
        showToast: true,
        toastMessage: "Selecione um tamanho",
        toastType: "warning",
      });
    } else if (this.state.quantity == "") {
      this.setState({
        showToast: true,
        toastMessage: "Selecione a quantidade",
        toastType: "warning",
      });
    } else if (this.state.quantity > this.state.products.quantity) {
      this.setState({
        showToast: true,
        toastMessage: "Quantidade indisponível",
        toastType: "warning",
      });
    } else {
      const productList =
        JSON.parse(sessionStorage.getItem("shoppingCart")) || [];
      const updatedProduct = {
        productFK: this.state.products.id,
        quantity: this.state.quantity,
        totalPrice: this.state.products.price * this.state.quantity,
        size: this.state.selectedSize,
        number: productList.length + 1,
        name: this.state.products.name,
        image: this.state.products.imagePath,
      };
      console.log(updatedProduct);
      // Append the new product to the list
      productList.push(updatedProduct);

      // Update the session storage with the updated list
      sessionStorage.setItem("shoppingCart", JSON.stringify(productList));
      this.setState({
        showToast: true,
        toastMessage: "Produto adicionado ao carrinho",
        toastType: "success",
      });
    }
    setTimeout(() => {
      this.setState({ cartClick: false });
    }, 1000);
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const s = searchParams.get("id");
    if (s) {
      this.setState({ id: s });
      console.log(s);
    }
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      `https://atsoc.somee.com/backend/API/Products/${s}`,
      requestOptions
    ).catch((error) => console.log("error", error));
    if (res !== undefined && res.status === 200) {
      let result = await res.json();
      this.setState({ products: result });
      console.log(result);
      window.scrollTo(0, 0);
    } else {
      this.setState({
        showToast: true,
        toastMessage: "Ocorreu um erro ao carregar o produto",
        toastType: "danger",
      });
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "10%", left: "5%", position: "relative" }}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://atsoc.somee.com/backend/images/${this.state.products.imagePath}`}
              alt="Product"
              className="img-fluid"
            />
          </div>
          <div
            className="col-md-6"
            style={{ textAlign: "left", marginLeft: "5%", maxWidth: "35%" }}
          >
            <h2>{this.state.products.name}</h2>
            <h4>{this.state.products.price}€</h4>
            <br />
            <p>Cor</p>
            <div className="col-md-6" style={{ maxWidth: "200px" }}>
              <img
                src={`https://atsoc.somee.com/backend/images/${this.state.products.imagePath}`}
                alt="Product"
                className="img-fluid"
                style={{
                  width: "40%",
                  cursor: "pointer",
                  border: "2px solid black",
                }}
              />
            </div>
            <br />
            <InputGroup className="my-4">
              <FormControl
                type="number"
                min={1}
                max={this.state.products.quantity}
                value={this.state.quantity}
                onChange={this.handleQuantity}
              />
              <InputGroup.Text>Quantidade</InputGroup.Text>
            </InputGroup>
            <p>Tamanhos</p>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "2fr",
                gap: "20px 20px",
              }}
            >
              <Button
                className={
                  this.state.selectedSize == "S" ? "selected" : "button-size"
                }
                value={this.state.selectedSize}
                onClick={() => this.handleClick("S")}
              >
                S
              </Button>
              <Button
                className={
                  this.state.selectedSize == "M" ? "selected" : "button-size"
                }
                value={this.state.selectedSize}
                onClick={() => this.handleClick("M")}
              >
                M
              </Button>
              <Button
                className={
                  this.state.selectedSize == "L" ? "selected" : "button-size"
                }
                value={this.state.selectedSize}
                onClick={() => this.handleClick("L")}
              >
                L
              </Button>
            </div>
            <br />
            <br />
            <Button
              className={
                this.state.cartClick ? "add-button-click" : "add-button"
              }
              variant="primary"
              style={{ width: "100%" }}
              onMouseDown={() => this.handleCartClick()}
            >
              <FaShoppingCart className="mr-2" />
              Adicionar
            </Button>
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
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ProductDetails;

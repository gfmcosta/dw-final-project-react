import { CompressOutlined } from "@mui/icons-material";
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Toast,
} from "react-bootstrap";

class OrderHistory extends Component {
  state = {
    orders: [],
    showToast: false,
    toastMessage: "",
    toastType: "",
    showModal: false,
    selectedOrder: null,
    orderItems: [],
  };
  async handleOpenModal(order) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    let res = await fetch(
      `http://atsoc.somee.com/backend/API/orderItems/${order.id}`,
      requestOptions
    ).catch((error) => console.log("error", error));
    console.log(res);
    if (res !== undefined && res.status === 200) {
      let result = await res.json();
      console.log(result);
      this.setState({ orderItems: result.$values });
    } else {
      this.setState({
        showToast: true,
        toastMessage: "Ocorreu um erro ao carregar o histório de compras",
        toastType: "danger",
      });
    }
    this.setState({ selectedOrder: order });
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ selectedOrder: null, showModal: false });
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    let res = await fetch(
      `http://atsoc.somee.com/backend/API/OrderHistory/${user.person.id}`,
      requestOptions
    ).catch((error) => console.log("error", error));
    console.log(res);
    if (res !== undefined && res.status === 200) {
      let result = await res.json();
      console.log(result);
      this.setState({ orders: result });
    } else {
      this.setState({
        showToast: true,
        toastMessage: "Ocorreu um erro ao carregar o histório de compras",
        toastType: "danger",
      });
    }
  }
  render() {
    const totalPrice = this.state.orderItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    return (
      <>
        <Container style={{ marginTop: "9%" }}>
          <h1 style={{ marginBottom: "3%" }}>Histórico de Compras</h1>
          <Row>
            {this.state.orders.length > 0 ? (
              <>
                {this.state.orders.map((order) => (
                  <Col key={order.id} sm={4} className="mb-4">
                    <Card style={{ width: "400px" }}>
                      <Card.Body>
                        <Card.Title>Encomenda #{order.id}</Card.Title>
                        <Card.Text>
                          Data: {new Date(order.date).toLocaleDateString()}
                        </Card.Text>
                        <Card.Text>
                          Hora: {new Date(order.date).toLocaleTimeString()}
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => this.handleOpenModal(order)}
                        >
                          Ver Detalhes
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </>
            ) : (
              <h3>Não existem encomendas</h3>
            )}
          </Row>
        </Container>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Detalhes da Encomenda</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.selectedOrder && (
              <div>
                <p>Encomenda: #{this.state.selectedOrder.id}</p>
                <Card.Text>
                  Data:{" "}
                  {new Date(this.state.selectedOrder.date).toLocaleDateString()}
                </Card.Text>
                <Card.Text>
                  Hora:{" "}
                  {new Date(this.state.selectedOrder.date).toLocaleTimeString()}
                </Card.Text>
                <p key={999}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "60px",
                      marginLeft: "10%",
                    }}
                  >
                    Nº
                  </span>
                  <span style={{ display: "inline-block", width: "100px" }}>
                    Nome
                  </span>
                  <span style={{ display: "inline-block", width: "80px" }}>
                    Tamanho
                  </span>
                  <span style={{ display: "inline-block", width: "100px" }}>
                    Quantidade
                  </span>
                  <span style={{ display: "inline-block", width: "80px" }}>
                    Preço
                  </span>
                </p>
                {this.state.orderItems.map((item, index) => (
                  <p key={item.id} style={{ height: "80px" }}>
                    <img
                      src={`http://atsoc.somee.com/backend/images/${item.product.imagePath}`}
                      style={{ width: "8%" }}
                    ></img>
                    <span
                      style={{
                        display: "inline-block",
                        width: "60px",
                        marginLeft: "2%",
                      }}
                    >
                      {index + 1}
                    </span>
                    <span style={{ display: "inline-block", width: "100px" }}>
                      {item.product.name}
                    </span>
                    <span style={{ display: "inline-block", width: "80px" }}>
                      {item.size}
                    </span>
                    <span style={{ display: "inline-block", width: "100px" }}>
                      {item.quantity}
                    </span>
                    <span style={{ display: "inline-block", width: "80px" }}>
                      {item.totalPrice}€
                    </span>
                  </p>
                ))}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <span
              style={{
                marginRight: "auto",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Preço Total: {totalPrice}€
            </span>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
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
      </>
    );
  }
}

export default OrderHistory;

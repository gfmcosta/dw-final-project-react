import React, { Component, useState } from "react";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RegistrationPage.css";

class RegistrationPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    dataNasc: "",
    gender: "",
    imagePath: "",
    showToast: false,
    toastMessage: "",
    toastType: "",
  };

  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }

  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  handlePhoneNumber(evt) {
    this.setState({ phoneNumber: evt.target.value });
  }

  handleAddress(evt) {
    this.setState({ address: evt.target.value });
  }

  handlePostalCode(evt) {
    this.setState({ postalCode: evt.target.value });
  }

  handleDataNasc(data) {
    this.setState({ dataNasc: data });
  }

  handleGender(evt) {
    this.setState({ gender: evt.target.value });
  }

  handleImagePath = (event) => {
    const file = event.target.files[0];
    // Convert the image file to data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      // Update the state with the image data URL
      this.setState({ imagePath: imageDataUrl });
    };

    reader.readAsDataURL(file);
  };

  async handleRegistration() {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /^\d+$/;
    const postalCodeRegex = /^\d{4}-\d{3} [A-Za-z]+$/;
    const currentDate = new Date();
    const yearDiff =
      currentDate.getFullYear() - this.state.dataNasc.getFullYear();
    if (
      this.state.name == "" ||
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.phoneNumber == "" ||
      this.state.address == "" ||
      this.state.postalCode == "" ||
      this.state.dataNasc == "" ||
      this.state.gender == ""
    ) {
      this.setState({
        showToast: true,
        toastMessage: "Preencha todos os campos",
        toastType: "warning",
      });
    } else if (
      this.state.email.includes("@admin.ipt.pt") ||
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      this.setState({
        showToast: true,
        toastMessage: "Email Inválido",
        toastType: "warning",
      });
    } else if (
      !uppercaseRegex.test(this.state.password) ||
      !specialCharRegex.test(this.state.password) ||
      this.state.password.length < 6
    ) {
      this.setState({
        showToast: true,
        toastMessage:
          "Password Inválida - Requisitos:-6 Caracteres -1 Caractere especial -1 Letra Maíuscula",
        toastType: "warning",
      });
    } else if (!numberRegex.test(this.state.phoneNumber)) {
      this.setState({
        showToast: true,
        toastMessage: "Telemóvel inválido",
        toastType: "warning",
      });
    } else if (!postalCodeRegex.test(this.state.postalCode)) {
      this.setState({
        showToast: true,
        toastMessage: "Código-Postal Inválido",
        toastType: "warning",
      });
    } else if (yearDiff > 150) {
      this.setState({
        showToast: true,
        toastMessage: "Data de Nascimento Inválida",
        toastType: "warning",
      });
      console.log(yearDiff);
    } else {
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
        postalCode: this.state.postalCode,
        dataNasc: this.state.dataNasc,
        gender: this.state.gender,
        imagePath: this.state.imagePath,
      };
      await fetch(`https://atsoc.somee.com/backend/API/Register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              showToast: true,
              toastMessage: "Utilizador registado com sucesso",
              toastType: "success",
            });
            window.location.href = "/";
          } else {
            this.setState({
              showToast: true,
              toastMessage: "Ocorreu um erro ao registar",
              toastType: "danger",
            });
          }
          response.json();
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
          this.setState({
            showToast: true,
            toastMessage: "Ocorreu um erro ao registar",
            toastType: "danger",
          });
        });
    }
  }

  render() {
    const maxDate = new Date();
    return (
      <Container
        style={{
          minHeight: "100vh",
          marginTop: "6%",
          minWidth: "100%",
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/background-with-colorful-shopping-bags-vector-illustration-sale-discount-concept_653240-59.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      >
        <Row className="justify-content-center">
          <Col
            md={6}
            style={{
              marginTop: "5%",
              display: "grid",
              justifyContent: "center",
            }}
          >
            <Form
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                padding: "21px",
                textAlign: "center",
                width: "600px",
              }}
            >
              <h1 className="text-center">Criar Conta</h1>
              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o seu nome"
                  name="name"
                  value={this.state.name}
                  onChange={(evt) => this.handleNameChange(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira o seu email"
                  name="email"
                  value={this.state.email}
                  onChange={(evt) => this.handleEmailChange(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira a sua password"
                  name="password"
                  value={this.state.password}
                  onChange={(evt) => this.handlePasswordChange(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Telemóvel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o seu telemóvel"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={(evt) => this.handlePhoneNumber(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Morada</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira a sua morada"
                  name="address"
                  value={this.state.address}
                  onChange={(evt) => this.handleAddress(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formPostalCode">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o seu código postal"
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={(evt) => this.handlePostalCode(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formDataNasc">
                <Form.Label>Data de Nascimento</Form.Label>
                <DatePicker
                  selected={this.state.dataNasc}
                  onChange={(date) => this.handleDataNasc(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecione a data de nascimento"
                  maxDate={maxDate}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  placeholder="Insira a sua imagem"
                  onChange={this.handleImagePath}
                />
              </Form.Group>

              <Form.Group controlId="formGender">
                <Form.Label>Género</Form.Label>
                <Form.Check
                  type="radio"
                  label="Masculino"
                  name="gender"
                  value="M"
                  checked={this.state.gender === "M"}
                  onChange={(evt) => this.handleGender(evt)}
                />
                <Form.Check
                  type="radio"
                  label="Feminino"
                  name="gender"
                  value="F"
                  checked={this.state.gender === "F"}
                  onChange={(evt) => this.handleGender(evt)}
                />
              </Form.Group>
              <br />
              <Button
                variant="primary"
                onClick={() => this.handleRegistration()}
                block
              >
                Registrar
              </Button>
            </Form>
          </Col>
        </Row>
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

export default RegistrationPage;

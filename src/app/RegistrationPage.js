import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './RegistrationPage.css'

class RegistrationPage extends Component{
  state={
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    postalCode: '',
    dataNasc:'',
    gender: '',
    imagePath: '',
  }

  handleNameChange(evt){
    this.setState({name: evt.target.value});
  }

  handleEmailChange(evt){
    this.setState({email: evt.target.value});
  }

  handlePasswordChange(evt){
    this.setState({password: evt.target.value});
  }
  
  handlePhoneNumber(evt){
    this.setState({phoneNumber: evt.target.value});
  }

  handleAddress(evt){
    this.setState({address: evt.target.value});
  }

  handlePostalCode(evt){
    this.setState({postalCode: evt.target.value});
  }

  handleDataNasc(evt){
    this.setState({dataNasc: evt.target.value});
  }

  handleGender(evt){
    this.setState({gender: evt.target.value});
  }

  handleImagePath(evt){
    this.setState({imagePath: evt.target.value});
  }



  render(){
    return (
      <Container style={{minHeight: '100vh', marginTop:'6%', minWidth:"100%",
        backgroundImage: "url('https://img.freepik.com/premium-vector/background-with-colorful-shopping-bags-vector-illustration-sale-discount-concept_653240-59.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%"
        }}>
        <Row className="justify-content-center">
          <Col md={6} style={{marginTop:'5%', display:"grid", justifyContent:"center"}}>
            <Form style={{
              backgroundColor: "whitesmoke",
              borderRadius: "10px",
              padding: "21px",
              textAlign: "center",
              width: "600px"
              }}>
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

              <Form.Group controlId="formImage">
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Insira a sua imagem"
                  name="imagePath"
                  value={this.state.imagePath}
                  onChange={(evt) => this.handleImagePath(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formGender">
                <Form.Label>Género</Form.Label>
                <Form.Check
                  type="radio"
                  label="Masculino"
                  name="gender"
                  value="Masculino"
                  checked={this.state.gender === 'Masculino'}
                  onChange={(evt) => this.handleGender(evt)}
                />
                <Form.Check
                  type="radio"
                  label="Feminino"
                  name="gender"
                  value="Feminino"
                  checked={this.state.gender === 'Feminino'}
                  onChange={(evt) => this.handleGender(evt)}
                />
              </Form.Group>
              <br />
              <Button variant="primary" onClick={() => this.handleRegistration()} block>
                Registrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
  }

export default RegistrationPage;
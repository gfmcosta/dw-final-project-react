import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './RegistrationPage.css';
import backgroundImage from './images/RegistrationPage_image.jpg';

class RegistrationPage extends Component {
    state = {
      username: '',
      email: '',
      password: '',
      name: '',
      phoneNum: '',
      address: '',
      postalCode: '',
      birthDate: '',
      sexo: '',
      image:'',
    };


    handlePhoneNumChange(evt){
        this.setState({phoneNum: evt.target.value});
    };

    handleAddressChange(evt){
        this.setState({address: evt.target.value});
    };

    handlePostalCodeChange(evt){
        this.setState({postalCode: evt.target.value});
    };

    handleBirthDateChange(evt){
        this.setState({birthDate: evt.target.value});
    };

    handleSexoChange(evt){
        this.setState({sexo: evt.target.value});
    };

    handleImageChange(evt){
        this.setState({image: evt.target.value});
    };

  handleUsernameChange(evt){
    this.setState({username: evt.target.value});
  };

  handleEmailChange(evt){
    this.setState({email: evt.target.value});
  };

  handleNameChange(evt){
    this.setState({name: evt.target.value});
  };

    handlePasswordChange(evt){
        this.setState({password: evt.target.value});
    };

  handleSubmit(){
    console.log("entrei no submit");
  };

  render() {
    return (
      <Container fluid className="registration-container" style={{backgroundColor:'#FF6F00'}}>
        <Row style={{marginTop:'27%'} }>
          
          <Col md={6} className="registration-form" >
            <div className="text-center mb-4">
              <h2>Crie uma conta</h2>
              <p className="text-muted">Junte-se à nossa comunidade!</p>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={(evt) => this.handleUsernameChange(evt)}
                  placeholder="Insira o seu username"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(evt) => this.handleEmailChange(evt)}
                  placeholder="Insira o seu email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(evt) => this.handlePasswordChange(evt)}
                  placeholder="Insira a sua password"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(evt) => this.handleNameChange(evt)}
                  placeholder="Insira o seu nome"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Telemóvel</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNum"
                  value={this.state.phoneNum}
                  onChange={(evt) => this.handlePhoneNumChange(evt)}
                  placeholder="Insira o seu número de telemóvel"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Morada</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={(evt) => this.handleAddressChange(evt)}
                  placeholder="Insira a sua morada"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPostalCode">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={(evt) => this.handlePostalCodeChange(evt)}
                  placeholder="Insira o seu código postal"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formName">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={this.state.birthDate}
                  onChange={(evt) => this.handleBirthDateChange(evt)}
                  placeholder="Insira a sua data de nascimento"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSex">
                <Form.Label>Sexo</Form.Label>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Form.Check
                    inline
                    label="Masculino"
                    type="radio"
                    name="sexo"
                    id="radioMasculino"
                    value="masculino"
                    checked={this.state.sexo === 'M'}
                    onChange={(evt) => this.handleSexoChange(evt)}
                    />
                    <Form.Check
                    inline
                    label="Feminino"
                    type="radio"
                    name="sexo"
                    id="radioFeminino"
                    value="feminino"
                    checked={this.state.sexo === 'F'}
                    onChange={(evt) => this.handleSexoChange(evt)}
                    />
                </div>
                </Form.Group>

                <Form.Group controlId="formImage">
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    value={this.state.image}
                    onChange={(evt) => this.handleImageChange(evt)}
                    placeholder="Insira a sua imagem"
                    required
                />
                </Form.Group>


              <Button variant="primary"  className="subButton" onClick={() => this.handleSubmit()}>
                Registar
              </Button>
              <p className="text-center mt-3">
                Já tem uma conta? <a href="/login">Inicie Sessão</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegistrationPage;
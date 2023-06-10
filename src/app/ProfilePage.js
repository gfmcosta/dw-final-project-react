import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./ProfilePage.css"

class ProfilePage extends Component{
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
            <>
            <div className="center" style={{ gridColumn: "1", gridRow: "1", marginTop:"10%"}}>
            <h1>Perfil</h1>
            <img
                src={"https://hypixel.net/attachments/face-png.2475043/"}
                alt="Profile Icon"
                className="rounded-circle img-fluid"
                style={{ width: '150px', height: '150px' }} />
            </div>

        <Container style={{
                minHeight: '100vh', marginTop: '2%', width: "60%", contentAlign: "center", display: "grid", justifyContent:"center",
                gridTemplateColumns: "0.25fr 0.25fr",
                gridTemplateRows: "repeat(6, 0.1fr)",
            }}>

                <div className="center" style={{ gridColumn: "1", gridRow: "1" }}>
                    <Form.Group controlId="formName">
                        <Form.Label style={{ float: "left" }}>Nome</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira o seu nome"
                            name="name"
                            value={this.state.name}
                            onChange={(evt) => this.handleNameChange(evt)} />
                    </Form.Group>
                </div>

                <div className="center" style={{ gridColumn: "2", gridRow: "1" }}>
                    <Form.Group controlId="formEmail">
                        <Form.Label style={{ float: "left" }}>Email</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="email"
                            placeholder="Insira o seu email"
                            name="email"
                            value={this.state.email}
                            onChange={(evt) => this.handleEmailChange(evt)} />
                    </Form.Group>
                </div>

                <div className="center" style={{ gridColumn: "1", gridRow: "2" }}>
                    <Form.Group controlId="formPassword">
                        <Form.Label style={{ float: "left" }}>Palavra-Passe</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="password"
                            placeholder="Insira a sua password"
                            name="password"
                            value={this.state.password}
                            onChange={(evt) => this.handlePasswordChange(evt)} />
                    </Form.Group>
                </div>

                <div className="center" style={{ gridColumn: "2", gridRow: "2" }}>
                    <Form.Group controlId="formPhoneNumber">
                        <Form.Label style={{ float: "left" }}>Telemóvel</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira o seu telemóvel"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={(evt) => this.handlePhoneNumber(evt)} />
                    </Form.Group>
                </div>

                <div className="center" style={{ gridColumn: "1", gridRow: "3" }}>
                    <Form.Group controlId="formAddress">
                        <Form.Label style={{ float: "left" }}>Morada</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira a sua morada"
                            name="address"
                            value={this.state.address}
                            onChange={(evt) => this.handleAddress(evt)} />
                    </Form.Group>
                </div>

                <div className="center" style={{ gridColumn: "2", gridRow: "3" }}>
                    <Form.Group controlId="formPostalCode">
                        <Form.Label style={{ float: "left" }}>Código Postal</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira o seu código postal"
                            name="postalCode"
                            value={this.state.postalCode}
                            onChange={(evt) => this.handlePostalCode(evt)} />
                    </Form.Group>
                </div>

                <div className="center" style={{ gridColumn: "1", gridRow: "4" }}>
                <Form.Group controlId="formGender">
                    <Form.Label style={{float:"left"}}>Género</Form.Label>
                    <Form.Select
                    name = "gender"
                    value={this.state.gender}
                    onChange={(evt) => this.handleGenderChange()}
                    >
                    <option value = "" disabled hidden>Género</option>
                    <option value = "M">Masculino</option>
                    <option value = "F">Feminino</option>
                    </Form.Select>
                </Form.Group>
                </div>

                <div style={{ gridColumn: "2", gridRow: "4", marginTop:"14%"}}>
                    <Button variant="primary" onClick={() => this.handleRegistration()} block>
                        Registrar
                    </Button>
                </div>
            </Container></>
        );
      }
      }
    
    export default ProfilePage;
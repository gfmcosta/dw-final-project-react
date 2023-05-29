import React, { Component } from 'react';
import { Container, Row, Col, Form, Button,Navbar, Nav } from 'react-bootstrap';
import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import Layout from './Layout';
class LoginPage extends Component {
    state = { 
        email: '',
        password: '',
        user: [],
        status: 0
    }



    handleEmailChange(evt){
        this.setState({email: evt.target.value});
    }

    handlePasswordChange(evt){
      this.setState({password: evt.target.value});
    }

    async handleLogin(){
      if(this.state.email === '' || this.state.password === ''){
        alert("Preencha todos os campos");
        
      }else{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`https://localhost:7122/User/Login/${this.state.email}/${this.state.password}`, requestOptions).catch(error => console.log('error', error));;
        let result = await res.json();
        // console.log(JSON.parse(sessionStorage.getItem('user')));
        if (res.status === 200){
          sessionStorage.setItem('user', JSON.stringify(result));
          window.location.href = "/";
        }else{
          alert("Email ou password incorretos");
        }
      }
    }
    
    render() {
        return (
            <div style={{backgroundColor: 'cyan'}}>
              <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'cyan', marginTop:'9%'}}>
                <Row>
                  <Col xs={12} md={12} className="bg-light rounded p-5">
                    <h1 className="text-center mb-5" style={{textAlign: 'center'}}>Iniciar Sessão</h1>
                    <Form onSubmit={null}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <input class="form-control" type="email" placeholder="Insira o seu email" value={this.state.email} onChange={(evt) => this.handleEmailChange(evt)} />
                        <Form.Text className="text-muted">
                          Não iremos partilhar o seu email com ninguém.
                        </Form.Text>
                        <br></br><br></br>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <input class="form-control" type="password" placeholder="Insira a sua password" value={this.state.password} onChange={(evt) => this.handlePasswordChange(evt)} />
                      </Form.Group>
                      <br></br>
                      <Button  variant="primary" className="w-100" onClick={() => this.handleLogin()}>
                        Entrar
                      </Button>
                      <br></br><br></br>
                      <Button variant="secondary" type="submit" className="w-100" href='/registration'>
                        Registar
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
        );
    }
}

export default LoginPage;
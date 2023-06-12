import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Toast} from 'react-bootstrap';
import "./LoginPage.css"
class LoginPage extends Component {
    state = { 
        email: '',
        password: '',
        user: [],
        status: 0,
        modalShow: false,
        showToast: false,
        toastMessage: '',
        toastType: '',
    }

    handleEmailChange(evt){
        this.setState({email: evt.target.value});
    }

    handlePasswordChange(evt){
      this.setState({password: evt.target.value});
    }

    async handleLogin(){
      if(this.state.email === '' || this.state.password === ''){
        this.setState({ showToast: true, toastMessage: 'Preencha todos os campos', toastType: 'warning' });        
      }else{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        let res = await fetch(`http://localhost:5072/API/Login/${this.state.email}/${this.state.password}`, requestOptions).catch(error => console.log('error', error));;
        console.log(res);
        if(res!==undefined){
          if (res.status === 200){
            let result = await res.json();
            sessionStorage.setItem('user', JSON.stringify(result));
            window.location.href = "/";
          }else{
            this.setState({ showToast: true, toastMessage: 'Credenciais inexistentes', toastType: 'danger' });
          }
        }else{
          this.setState({ showToast: true, toastMessage: 'Sistema indisponível', toastType: 'danger' });
        }
      }
    }
    
    render() {
        return (
            <div className="main_div">
              <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'transparent', marginTop:'3%'}}>
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
              <Toast show={this.state.showToast} onClose={() => this.setState({showToast:false})} delay={5000} autohide   style={{ position: 'fixed', top: '18%', right: '20px' }} bg={this.state.toastType}>
                          <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Sistema</strong>
                            <small>Há 1 segundo atrás</small>
                          </Toast.Header>
                          <Toast.Body>{this.state.toastMessage}</Toast.Body>
                        </Toast>
            </div>
        );
    }
}

export default LoginPage;
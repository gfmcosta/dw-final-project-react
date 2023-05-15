import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class LoginPage extends Component {
    state = {  }

    render() {
        return (
            <div style={{backgroundColor: 'cyan'}}>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'cyan'}}>
      <Row>
        <Col xs={12} md={12} className="bg-light rounded p-5">
          <h1 className="text-center mb-4">Iniciar Sessão</h1>
          <Form onSubmit={null}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira o seu email" value={null} onChange={null} />
              <Form.Text className="text-muted">
                Não iremos compartilhar seu email com ninguém.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Pasword</Form.Label>
              <Form.Control type="password" placeholder="Insira a sua password" value={null} onChange={null} />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" className="w-100">
              Entrar
            </Button>
            <br></br><br></br>
            <Button variant="secondary" type="submit" className="w-100">
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
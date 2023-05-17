import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './RegistrationPage.css';
import backgroundImage from './images/RegistrationPage_image.jpg';

function RegistrationPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Send registration data to a server

        // Clear form fields after registration
        setFormData({
            username: '',
            email: '',
            password: ''
        });
    }

    return (
        <Container fluid className="registration-container">
            <Row>
                <Col className="registration-page-image" style={{ backgroundImage: `url(${backgroundImage})` }} />
                <Col md={6} className="registration-form">
                    <div className="text-center mb-4">
                        <h2>Create an Account</h2>
                        <p className="text-muted">Join our clothing shop community</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="subButton">
                            Sign Up
                        </Button>
                        <p className="text-center mt-3">
                            Already have an account? <a href="/login">Log in</a>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationPage;

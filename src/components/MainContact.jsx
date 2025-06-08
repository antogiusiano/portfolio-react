import React, { useRef, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import "../css/MainContact.css"

const MainContact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n660zef",       
      "template_8izgnek",       
      form.current,
      "siH7XjK2EGLMGAm3-"       
    ).then(
      (result) => {
        console.log(result.text);
        alert("Mensaje enviado correctamente ✔");
        setFormData({ name: '', email: '', message: '' });
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert("Error al enviar el mensaje ❌");
      }
    );
  };

  return (
    <Container className="contact-container mt-4">
      <h2 className="mb-4">Contacto</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu email"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  )
}

export default MainContact;

import React, { useState } from 'react';
import { genericValidForm } from '../../utils/functions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const { name, email, message } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        //utilizo la funcion validateForm para validar que los campos no esten vacios, si estan vacios no se envia el formulario y se muestra un alert
        if (genericValidForm({ name, email, message })) {
            window.Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            });
            return;
        } else {
            console.log(genericValidForm({ name, email, message }));
            window.Swal.fire({
                icon: 'success',
                title: 'Formulario enviado',
                showConfirmButton: false,
                timer: 1500,
            });
        }
        console.log(formData);
    };

    return (
        <div className='contact'>
            <h1>Contact</h1>
            <Form onSubmit={handleSubmit} className="bg-body-tertiary">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default Contact

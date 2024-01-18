import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
//import './Card.css';

const Card = ({ id, name, status, gender, image }) => {
    return (
        <BootstrapCard style={{ width: '18rem' }}>
            <BootstrapCard.Img variant="top" src={image} />
            <BootstrapCard.Body>
                <BootstrapCard.Title>{name}</BootstrapCard.Title>
                <BootstrapCard.Text>ID: {id}</BootstrapCard.Text>
                <BootstrapCard.Text>Status: {status}</BootstrapCard.Text>
                <BootstrapCard.Text>Status: {gender}</BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default Card;

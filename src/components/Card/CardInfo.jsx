import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './CardInfo.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';


const Card = () => {
    const { characters2 } = useContext(CardContext);
    //Tomar el nombre del endpoint de la url
    const endpoint = window.location.pathname.split('/')[1];

    const character = characters2.find(character => character.name === endpoint);

    console.log(character);

    //destructuring del objeto character
    const { sprites, name , id, height, } = character;
    const nameMayus = name.toUpperCase();

    return (
        <div className="cardInfo">
            <BootstrapCard style={{ width: '15rem' }}>
                <BootstrapCard.Img variant="top" src={sprites.front_default} style={{ backgroundColor: '#f5f5f5' }}/>
                <BootstrapCard.Body>
                    <BootstrapCard.Title>{nameMayus}</BootstrapCard.Title>
                    <BootstrapCard.Text>ID: {id}</BootstrapCard.Text>
                    <BootstrapCard.Text>Height: {height}''</BootstrapCard.Text>
                    <Link to={`/pokemons`} className='btn btn-info btn-lg'>Volver</Link>
                </BootstrapCard.Body>
            </BootstrapCard>
        </div>
    );
}

export default Card;

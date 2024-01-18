import React, { useState, useEffect } from 'react';
import Card2 from '../Card/Card2';
import api from '../../utils/api';
import './Characters.css';

function Characters() {
    const endpoint = '/character';
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        api.get(endpoint)
            .then(response => {
                const { results } = response.data; // desestructuración de data
                setCharacters(results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Characters</h2>
            <div className="character-container">
                {characters.map((character) => (
                    <Card2 
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        gender={character.gender}
                        image={character.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Characters;

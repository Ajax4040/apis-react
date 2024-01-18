import React, { useState, useEffect } from 'react';
import Card2 from '../Card/Card2';
import api from '../../utils/api';
import './Characters.css';
import { InfinitySpin } from "react-loader-spinner";//Se instala con npm (https://mhnpd.github.io/react-loader-spinner/docs/components/infinity-spin)


function Characters() {
    const endpoint = '/character';
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(endpoint)
            .then(response => {
                const { results } = response.data; // desestructuración de data
                setCharacters(results);
            })
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    }, [endpoint]);

    return (
        <div>
            <h2>Characters</h2>
            {
                loading
                ? 
                <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
                />
                :
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
            }
        </div>
    );
}

export default Characters;

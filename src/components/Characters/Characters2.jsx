import React, { useState, useEffect } from 'react';
import Card2 from '../Card/Card2';
import api2 from '../../utils/api2';
import './Characters.css';
import { InfinitySpin } from "react-loader-spinner";//Se instala con npm (https://mhnpd.github.io/react-loader-spinner/docs/components/infinity-spin)


function Characters2() {
    const endpoint = '/pokemon';
    const [characters2, setCharacters2] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api2.get(endpoint)
            .then(response => {
                const { results } = response.data; // desestructuración de la lista de pokémon
                return Promise.all(results.map(pokemon => {
                    return api2.get(pokemon.url); // Solicitar detalles para cada Pokémon
                }));
            })
            .then(detailsResponses => {
                const pokemonDetails = detailsResponses.map(res => res.data);
                setCharacters2(pokemonDetails);
            })
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    }, [endpoint]);

    return (
        <div>
            <h2>Characters2</h2>
            {console.log(characters2)}
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
                    {characters2.map((character, index) => (
                        <Card2 
                            key={index}
                            id={index + 1} // Si quieres usar el índice como ID
                            name={character.name}
                            image={character.sprites.front_default}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

export default Characters2;

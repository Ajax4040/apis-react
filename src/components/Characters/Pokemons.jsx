import React, { useState, useEffect } from 'react';
import Card2 from '../Card/Card2';
import api2 from '../../utils/api2';
import './Pokemons.css';
import { InfinitySpin } from "react-loader-spinner";//Se instala con npm (https://mhnpd.github.io/react-loader-spinner/docs/components/infinity-spin)


function Pokemons({ search}) {
    const endpoint = '/pokemon';
    const [characters2, setCharacters2] = useState([]);
    const [loading, setLoading] = useState(true);
    //4f) Se recibe el valor de search desde App.js y se muestra en consola
    console.log('En Pokemons: ' + search);

    //5f) si search es distinto de vacio se hace un filtro de los pokemones, si no se muestra la lista completa
    const filteredCharacters = search ? characters2.filter(character => character.name.includes(search.toLowerCase())) : characters2;
    
    useEffect(() => {
        api2.get(endpoint)
            .then(response => {
                const { results } = response.data; // desestructuración de la lista de pokémon
                //console.log(results);
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
            <h2>Pokemons</h2>
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
                    {
                        filteredCharacters.map(character => {
                            const { id, name, sprites } = character;
                            return (
                                <Card2
                                    key={id}
                                    name={name}
                                    image={sprites.front_default}
                                    endpoint={endpoint}
                                />
                            );
                        })//6f) Se muestra la lista de pokemones filtrada o completa
                    }
                </div>
            }
        </div>
    );
}

export default Pokemons;

import React, { useState, useEffect } from 'react';
import Card3 from '../Card/Card3';
import api from '../../utils/api';
import './Characters.css';
import { InfinitySpin } from "react-loader-spinner";//Se instala con npm (https://mhnpd.github.io/react-loader-spinner/docs/components/infinity-spin)


function Characters({search}) {
    const endpoint = '/character';
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(endpoint)
            .then(response => {
                const { results } = response.data; // desestructuración de data
                //de results, tomar el name, cambiarlo a minúsculas y guardarlo de nuevo en results
                results.forEach(result => {
                    result.name = result.name.toLowerCase();
                });
                setCharacters(results);
            })
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    }, [endpoint]);

    //5f) si search es distinto de vacio se hace un filtro de los characters, si no se muestra la lista completa
    const filteredCharacters = search ? characters.filter(character => character.name.includes(search.toLowerCase())) : characters;

    return (
        <div>
            {console.log(characters)}
            <h2>Rick and Morty characters</h2>
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
                            const { id, name, image, status, gender } = character;
                            return (
                                <Card3
                                    key={id}
                                    name={name}
                                    image={image}
                                    status={status}
                                    gender={gender}
                                    endpoint={endpoint}
                                />
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Characters;

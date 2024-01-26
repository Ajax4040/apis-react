import React, { useState} from 'react';
import Card2 from '../Card/Card2';
import './Pokemons.css';
import { InfinitySpin } from "react-loader-spinner";//Se instala con npm (https://mhnpd.github.io/react-loader-spinner/docs/components/infinity-spin)
import { CardContext } from '../../context/CardContext';
import { useContext } from 'react';


function Pokemons({ search}) {

    const [endpoint] = useState('pokemon');
    const { characters2, loading } = useContext(CardContext);

    //5f) si search es distinto de vacio se hace un filtro de los pokemones, si no se muestra la lista completa
    const filteredCharacters = search ? characters2.filter(character => character.name.includes(search.toLowerCase())) : characters2;

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
                    {console.log('En pokemons...')}
                    {console.log(characters2)}
                    {
                        filteredCharacters.map(character => {
                            const { id, name, sprites } = character;;
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

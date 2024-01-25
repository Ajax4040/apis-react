import { createContext, useState, useEffect } from 'react';
import api2 from '../utils/api2';

export const CardContext = createContext();

function CardContextProvider({ children }) {
  const [characters2, setCharacters2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = '/pokemon';

    api2.get(endpoint)
  .then(response => Promise.all(response.data.results.map(pokemon => api2.get(pokemon.url))))
  .then(detailsResponses => {
    const pokemonDetails = detailsResponses.map(res => res.data);
    setCharacters2(pokemonDetails);
  });
      setTimeout(() => {
        setLoading(false);
    }, 3000);
  }, []);

  return (
    <CardContext.Provider value={{ characters2, loading }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;

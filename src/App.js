import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemons from './components/Characters/Pokemons';
import Characters from './components/Characters/Characters';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Contact from './components/Contact/Contact';
import { createContext } from 'react';
import CardContextProvider from './context/CardContext';

export const AppContext = createContext();

function App() {
  const [search, setSearch] = useState('');//1f) Se crea el estado de search en App.js con el valor inicial de vacio

  return (
    <CardContextProvider>
      <AppContext.Provider>
        <BrowserRouter className="App">

          <Nav setSearch={setSearch}/*3f) Llega el valor de search desde Nav y se setea en el estado search*/ />

          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/characters" element={<Characters search={search}/>}/>
            <Route path="/pokemons" element={<Pokemons search={search}/>}/>
            <Route exact path="pokemons/:name" element={<Card/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>

          <Footer/>  
        </BrowserRouter>
      </AppContext.Provider>
    </CardContextProvider>
  );
}

export default App;

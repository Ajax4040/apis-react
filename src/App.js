import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Footer from './components/Footer/Footer';
//import Header from './components/Header/Header';
//import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters2 from './components/Characters/Characters2';

function App() {
  const [search, setSearch] = useState('');//1f) Se crea el estado de search en App.js con el valor inicial de vacio

  return (
    <div className="App">
      <h1>Pagina de prueba de APIS</h1>
      <Nav setSearch={setSearch}/*3f) Llega el valor de search desde Nav y se setea en el estado search*/ />
      <Characters2 search={search}/>
      <Footer/>  
    </div>
  );
}

export default App;

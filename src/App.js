import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters2 from './components/Characters/Characters2';
import Characters from './components/Characters/Characters';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [search, setSearch] = useState('');//1f) Se crea el estado de search en App.js con el valor inicial de vacio

  return (
    <BrowserRouter className="App">

      <Nav setSearch={setSearch}/*3f) Llega el valor de search desde Nav y se setea en el estado search*/ />

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/characters1" element={<Characters search={search}/>}/>
        <Route path="/characters2" element={<Characters2 search={search}/>}/>
      </Routes>

      <Footer/>  
    </BrowserRouter>
  );
}

export default App;

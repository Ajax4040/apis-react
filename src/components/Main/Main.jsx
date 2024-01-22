import React from 'react'
import './Main.css'

const Main = () => {

    return (
        <div className='main'>
            <h1 style={{color: 'red'}}>APIS test page</h1>
            <h2><a href="/characters">Rick and Morty characters</a></h2>
            <h2><a href="/pokemons">Pokemons</a></h2>
        </div>
    )
}

export default Main

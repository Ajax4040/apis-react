import React from 'react'
import './Main.css'
import Characters from '../Characters/Characters'
import Characters2 from '../Characters/Characters2'

const Main = ({children}) => {

    return (
        <div className='main'>
            <h1 style={{color: 'red'}}>Main</h1>
            <h2>Aca va la API</h2>
            {children}
            <Characters/>
            <Characters2/>
        </div>
    )
}


export default Main

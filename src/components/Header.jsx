import React from 'react'
import "../css/Header.css"

const Header = ({alumno}) => {
    return (
        <div className='header'>
            <h1>Portfolio {alumno.nombre}</h1>
            <hr />
        </div>
    )
}

export default Header
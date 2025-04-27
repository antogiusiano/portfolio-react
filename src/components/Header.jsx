import React from 'react'

const Header = ({alumno}) => {
    return (
        <div>
            <h1>Portfolio {alumno.nombre}</h1>
            <hr />
        </div>
    )
}

export default Header
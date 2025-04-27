import React from 'react'

const Main = ({alumno}) => {
    return (
        <div className='card'>
            <h2>Soy {alumno.nombre} {alumno.apellido}</h2>
            <div className='card-body'>
                <h2>Descripcion: {alumno.descripcion}</h2>
                <h2>Lenguajes: {alumno.lenguajes}</h2>
                <h2>Mascotas: {alumno.mascotas}</h2>   
            </div>
        </div>
    )
}

export default Main
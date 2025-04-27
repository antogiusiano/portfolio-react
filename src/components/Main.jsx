import React from 'react'
import "../css/Main.css"

const Main = ({alumno}) => {
    return (
        <div className='main'>
            
            <div className='card'>
                <div className='section-header'>
                    <img src={alumno.imagen} alt="Foto Alumno" />
                    <h2>{alumno.nombre} {alumno.apellido}</h2>
                </div>
                <div className='section-body'>
                    <h2>{alumno.descripcion}</h2>
                    <div className='lenguajes'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="Icono programacion" />
                        <h2>{alumno.lenguajes}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
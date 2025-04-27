import React from 'react'
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const Home = () => {

    let Alumno = {
        nombre:"Antonella",
        apellido:"Giusiano",
        descripcion:"Estudiante de Programacion UTN-FRT",
        lenguajes:"C# - Python - Javascript",
        imagen:"../public/WhatsApp Image 2025-04-27 at 01.31.14.jpeg"
    };

    return (
        <div className='home'>
            <Header alumno={Alumno}/>
            <Main alumno={Alumno}/>
            <Footer />
        </div>
    )
}

export default Home
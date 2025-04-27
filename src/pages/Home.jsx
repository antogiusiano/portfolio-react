import React from 'react'
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const Home = () => {

    let Alumno = {
        nombre:"Antonella",
        apellido:"Giusiano",
        descripcion:"estudiante de Programacion de la UTN-FRT",
        lenguajes:"C#,Python,Javascript",
        mascotas:"Marley,Uma,Luli,Milo"
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
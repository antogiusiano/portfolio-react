import React from "react";
import "../css/MainAboutMe.css"
import Card from "../components/Card"


const MainAboutMe = () => {
  return (
    <div className="container">

      <Card/>
      {/* Carta de presentación */}
      <div className="presentation">
        <h2>Sobre mí</h2>
        <p>¡Hola! Soy Antonella Giusiano, y soy de San Miguel de Tucumán, Argentina. Actualmente me desempeño como Analista de Sistemas en el Ministerio de Economía y Producción, donde también brindo soporte técnico y gestiono herramientas como Google Analytics.

          Cuento con más de dos años de experiencia en entornos tecnológicos, combinando análisis, soporte y manejo de datos para optimizar procesos y brindar soluciones efectivas.

          Además, me encuentro en formación académica, cursando la Tecnicatura Universitaria en Programación y la carrera de Ingeniería en Sistemas, lo que complementa y potencia mi perfil técnico.

          Estoy abierta a nuevas oportunidades de colaboración o proyectos que representen un desafío profesional y me permitan seguir creciendo en el mundo IT.
        </p>
      </div>
    </div>
  )
}

export default MainAboutMe
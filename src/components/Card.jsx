import React, { useEffect, useState } from "react";

const Card = () => {
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    fetch("/data.json") 
      .then(response => response.json())
      .then(json => setAlumno(json.aboutMe))
      .catch(error => console.error("Error cargando datos:", error));
  }, []);

  return (
    <div className="card">
      {alumno ? (
        <>
          <div className="section-header">
            <img src={alumno.imagen} alt="Foto Alumno" />
            <h2>{alumno.nombre} {alumno.apellido}</h2>
          </div>
          <div className="section-body">
            <h2>{alumno.descripcion}</h2>
            <div className="lenguajes">
              <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="Icono programacion" />
              <h2>{alumno.lenguajes}</h2>
            </div>
          </div>
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  )
}

export default Card;
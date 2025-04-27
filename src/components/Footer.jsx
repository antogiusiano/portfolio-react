import React from 'react'
import "../css/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Redes Sociales</h3>

            <a href="https://www.instagram.com/anto_giusiano" target="_blank" rel="noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" width="40" alt="Instagram" />
            </a>

            <a href="https://www.linkedin.com/in/antonella-giusiano/" target="_blank" rel="noreferrer">
                <img src="https://static.vecteezy.com/system/resources/previews/023/986/926/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" width="40" alt="Instagram" />
            </a>
        </div>
    )
}

export default Footer
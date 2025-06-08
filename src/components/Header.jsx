import React from 'react';
import "../css/Header.css";
import NavBar from "../components/NavBar";
import useThemeStore from "../store/ThemeStore"; // 🔥 Importamos el estado del tema

const Header = () => {
    const { theme } = useThemeStore(); // 📌 Obtiene el estado del tema

    return (
        <div className={`header ${theme}`}> {/* Aplica la clase de tema */}
            <h1>Portfolio</h1>
            <NavBar />
            <hr />
        </div>
    );
};

export default Header;
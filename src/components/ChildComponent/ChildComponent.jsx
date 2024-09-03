import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext/ThemeContext';

const ChildComponent = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toggleTheme} className="toggle-theme-btn">
                {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </div>
    );
}

export default ChildComponent;
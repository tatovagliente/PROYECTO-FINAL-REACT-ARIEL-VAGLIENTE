import { useContext } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import ChildComponent from "../ChildComponent/ChildComponent"; // Importa el ChildComponent

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`Navbar ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="Navbar-logo">
            <Link to="/">
                    <img src="/src/assets/logo/Logo.jpg" alt="Logo Cercenasco" className="logo-image" />
                </Link>
            </div>

            <div className="Navbar-links">
                <ul>
                    <li>
                        <NavLink to="/categoria/Remeras" className="link" activeclassname="active">REMERAS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/Jeans" className="link" activeclassname="active">JEANS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/Camperas" className="link" activeclassname="active">CAMPERAS</NavLink>
                    </li>
                </ul>
            </div>

            <ChildComponent />

            <CartWidget />

        </nav>
    );
}

export default Navbar;
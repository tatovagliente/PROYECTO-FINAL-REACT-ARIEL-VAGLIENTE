import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">

      <div className="Navbar-logo">
        <Link to="/">LOGO CERCENASCO</Link>
      </div>

      <div className="Navbar-links">
        <ul>
        
          <li>
          <Link to="/categoria/Remeras">REMERAS</Link>
            </li>
          <li>
          <Link to="/categoria/Jeans">JEANS</Link>
            </li>
          <li>
            <Link to="/categoria/Camperas">CAMPERAS</Link>
            </li>
        </ul>
      </div>
      
    <CartWidget/>

    </nav>
  )
}

export default Navbar;
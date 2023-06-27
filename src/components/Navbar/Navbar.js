import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="wrap">
            <div className="navbar">
                <div className="logo">
                    <img src="../logo192.png" alt="logo"/>
                </div>
                <div className="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/agregar-queja">Agregar Queja</Link>
                    <Link to="/quejas">Ver Todas</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
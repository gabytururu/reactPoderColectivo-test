import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="wrap">
            <div className="navbar">
                <div className="logo">
                    <img src="./logo192.png" alt="logo"/>
                </div>
                <div className="menu">
                    <a href="/">Agregar Queja</a>
                    <a href="/">Ver Todas</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
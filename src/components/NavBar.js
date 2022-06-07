
import "./NavBar.css";

const Navigation = () => {
    return( 
        <nav className="nav-container">
           <div className="logo">
            <h1>Logo</h1>
           </div>
           <div>
            <ul className="ul-li">
                <li><a href="#?">Contacto </a></li>
                <li><a href="#?">Sobre nostros</a></li>
                <li><a href="#?">Producto</a></li>
                <li><a href="#?">Galeria</a></li>
            </ul>
           </div>
            
        </nav>
    );
} ;

export default Navigation;


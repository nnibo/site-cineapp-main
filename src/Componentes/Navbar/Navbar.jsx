import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav >
            <ul className="flex gap-3 font-jost">
                <li><Link to="/">Home</Link></li>
                <li><Link to="filmes">Filmes</Link></li>
                <li><Link to ="favoritos">Favoritos</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;
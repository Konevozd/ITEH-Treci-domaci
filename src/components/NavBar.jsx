import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to="/" className = "racunar"> Dobrodošli </Link>
        <Link to="/">
                Pocetna
                </Link>
                <Link to="/search">Pretraga</Link>
                <Link to="/rating">Ocenite nas</Link>
      </nav>
    </div>
  )
}

export default NavBar;

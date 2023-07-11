import logo from '../assets/logoPrincipal.svg';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
      <ul>
        <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '20px' }}></img>
        <li><a href="/home-page">Página Inicial</a></li>
        <li><a href="/sobre-nos">Sobre Nós</a></li>
        <li><a href="/fale-conosco">Fale Conosco</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


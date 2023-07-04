import logo from './logoPrincipal.svg';
import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '20px' }}></img>
          <li><a href="/">Página Inicial</a></li>
          <li><Link to="/sobre-nos">Sobre Nós</Link></li>
          <li><Link to="/fale-conosco">Fale Conosco</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;

  
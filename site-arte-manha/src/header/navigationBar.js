import logo from './logoPrincipal.svg';
import React from 'react';
class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '20px' }}></img>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
          <li><a href="/faleConosco">Fale Conosco</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;

  
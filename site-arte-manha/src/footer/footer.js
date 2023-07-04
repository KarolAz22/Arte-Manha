import React from 'react';
import imgRedesSociais from './Social.svg';

const Footer = () => {
  return (
    <footer class='footer-style'>
        <hr class='hr-footer'></hr>
        <div class='format-footer'>
            <p class='termos'> Termos & Condições</p>
            <p class='politica'>Política Privacidade</p>
            <a href=''><img src= {imgRedesSociais} alt='redes-sociais'></img></a>
        </div>
      <p>© {new Date().getFullYear()} Arte&Manha. Todos os direitos reservados.</p>
    </footer>
  );
};


export default Footer;

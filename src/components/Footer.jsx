import imgRedesSociais from '../assets/Social.svg';

function Footer() {
  return (
    <footer className='footer-style'>
      <hr className='hr-footer'></hr>
      <div className='format-footer'>
        <p className='termos'> Termos & Condições</p>
        <p className='politica'>Política Privacidade</p>
        <a href=''><img src={imgRedesSociais} alt='redes-sociais'></img></a>
      </div>
      <p>© {new Date().getFullYear()} Arte&Manha. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
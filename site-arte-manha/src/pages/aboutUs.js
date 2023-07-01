import React from 'react';
import imagSobreNos from './Arte&Manha.svg'

const AboutUs = () => {
  return (
    <div> 
      <img src={imagSobreNos} alt="imagem sobre nos" style={{width: '100%'}}></img>
      <div class='format alineHorizion' cols="12" lg="3">
        <div class='rectangle'>
            <p> Nossa missão</p>
            <p>Temos o intuito de oferecer aos nossos clientes os melhores artesanatos</p>
        </div>
        <div class='rectangle'>
            <p> Estamos localizados</p>
            <p>
                Rua macal do meio
                Bairro Centro,
                Diamantina/MG
                CEP 39100-000</p>
        </div>
        <div class='rectangle'>
            <p> Telefones</p>
            <p>
                (38) 98885-3928 <br/>

                (38) 98886-5639 <br/>

                (38) 98856-9880 <br/></p>
        </div>
      </div>
      <h1>Sobre Nós</h1>
      <p>Bem-vindo à nossa página "Sobre Nós"! Aqui você pode escrever informações sobre a sua empresa ou projeto.</p>
    </div>
  );
};

export default AboutUs;

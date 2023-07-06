import React from 'react';
import banner from './banner.svg';
import Footer from '../footer/footer';

const homePage = () =>{
  return(
    <div>
      <img src={banner} alt="banner principal" style={{width: '100%'}}></img>
      <div class='format alineHorizion' cols="12" lg="5"></div>

      <div class='product-rectangle'>
          <p>Mobile de parede</p>
          <p>R$58,00</p>
          <img src='../images/Product-1.png'></img>
      </div>

      <div class='product-rectangle'>
          <p>Anel Macramê</p>
          <p>R$15,00</p>
      </div>
      
      <div class='product-rectangle'>
          <p>Colar Lua</p>
          <p>R$20,00</p>
      </div>

      <div class='product-rectangle'>
          <p>Colar Sistema Solar</p>
          <p>R$48,00</p>
      </div>

      <div class='product-rectangle'>
          <p>Vaso Incensário Lua</p>
          <p> R$45,00</p>
      </div>

      <div class='product-rectangle'>
          <p>Tapete Paz</p>
          <p>R$29,00</p>
      </div>
      <footer>
          <Footer></Footer>
      </footer>
      
    </div>
  );
};

export default homePage;
import React from 'react';
import banner from './banner.svg';
import Footer from '../footer/footer';

const homePage = () =>{
  return(
    <div>
      <div class="banner">
        <div class="search-bar">
            <input type="text" placeholder=""></input>
            <button type="submit">Buscar</button>
      </div>
        </div>
      <div class='format-pag-inicial aline-horizion' cols="12" lg="3">
        <div class='product-rectangle'>
          <img src='../images/Product1.png'></img>
          <p>Mobile de parede</p>
          <hr></hr>
          <p>R$58,00</p>
        </div>

        <div class='product-rectangle'>
          <img src='../images/Product-2.png'></img>
          <p>Anel Macramê</p>
          <hr></hr>
          <p>R$15,00</p> 
        </div>
        
        <div class='product-rectangle'>
          <img src='../images/Product-3.png'></img>
          <p>Colar Lua</p>
          <hr></hr>
          <p>R$20,00</p>
        </div>
      </div>
      <div class='format-pag-inicial aline-horizion' cols="12" lg="3">
        <div class='product-rectangle'>
          <img src='../images/Product-4.png'></img>
          <p>Colar Sistema Solar</p>
          <hr></hr>
          <p>R$48,00</p>
        </div>

        <div class='product-rectangle'>
          <img src='../images/Product-5.png'></img>
          <p>Vaso Incensário Lua</p>
          <hr></hr>
          <p> R$45,00</p>
        </div>

        <div class='product-rectangle'>
          <img src='../images/Product-6.png'></img>
            <p>Tapete Paz</p>
            <hr></hr>
            <p>R$29,00</p>
        </div>
      </div>
      <footer>
          <Footer></Footer>
      </footer>
      
    </div>
  );
};

export default homePage;
import React from 'react';
// import banner from '../assets/banner.svg';

function homePage() {
  return (
    <div>
      <div className="banner">
        <div className="search-bar">
          <input type="text" placeholder=""></input>
          <button type="submit">Buscar</button>
        </div>
      </div>
      <div className='format-pag-inicial aline-horizion' cols="12" lg="3">
        <div className='product-rectangle'>
          <img src='img/Product1.png'></img>
          <p>Mobile de parede</p>
          <hr></hr>
          <p>R$58,00</p>
        </div>

        <div className='product-rectangle'>
          <img src='img/Product-2.png'></img>
          <p>Anel Macramê</p>
          <hr></hr>
          <p>R$15,00</p>
        </div>

        <div className='product-rectangle'>
          <img src='img/Product-3.png'></img>
          <p>Colar Lua</p>
          <hr></hr>
          <p>R$20,00</p>
        </div>
      </div>
      <div className='format-pag-inicial aline-horizion' cols="12" lg="3">
        <div className='product-rectangle'>
          <img src='img/Product-4.png'></img>
          <p>Colar Sistema Solar</p>
          <hr></hr>
          <p>R$48,00</p>
        </div>

        <div className='product-rectangle'>
          <img src='img/Product-5.png'></img>
          <p>Vaso Incensário Lua</p>
          <hr></hr>
          <p> R$45,00</p>
        </div>

        <div className='product-rectangle'>
          <img src='img/Product-6.png'></img>
          <p>Tapete Paz</p>
          <hr></hr>
          <p>R$29,00</p>
        </div>
      </div>
    </div>
  );
}

export default homePage;
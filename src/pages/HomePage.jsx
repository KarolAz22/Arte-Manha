import React from 'react';
import "../css/home/Home.css";
import ProductCard from '../components/ProductCard';
import productData from "../productData";
// import banner from '../assets/banner.svg';

function homePage(){



  return (
    <div>
      <div className="banner">
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar"></input>
          <button type="submit">Buscar</button>
        </div>
      </div>
      <div className='container home-cards-container'>
        {productData.map((p) => <ProductCard key={p.id} img={p.img} nome={p.name} price={p.price}/>)}
      </div>
    </div>
  );
}

export default homePage;
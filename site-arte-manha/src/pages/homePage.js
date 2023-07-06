import React from 'react';
import banner from './Arte&Manha.svg';

const homePage = () =>{
    return(
        <div>
            <img src={banner} alt="banner principal" style={{width: '100%'}}></img>
            <div class='format alineHorizion' cols="12" lg="5">

            <div class=''>
                <p>Mobile de parede</p>
                <p>R$58,00</p>
            </div>

            <div class='rectangle'>
                <p>Anel Macramê</p>
                <p>R$15,00</p>
            </div>
            
            <div class='rectangle2'>
                <p>Colar Lua</p>
                <p>R$20,00</p>
            </div>

            <div class='rectangle2'>
                <p>Colar Sistema Solar</p>
                <p>R$48,00</p>
            </div>

            <div class='rectangle2'>
                <p>Vaso Incensário Lua</p>
                <p> R$45,00</p>
            </div>

            <div class='rectangle2'>
                <p>Tapete Paz</p>
                <p>R$29,00</p>
            </div>
            </div>
            
        </div>
    );
};

export default homePage;
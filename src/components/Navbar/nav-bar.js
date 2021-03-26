import React from "react";
import CartWidget from "../CartWidget/index"

export const NavBar = () => { return ( 

 <div>  
    
   
      <div class="header__menu">
     

      <nav>
    <div class="nav-wrapper">
      <a href="" class="brand-logo">Gea Aromas</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
    
        <li><a href="">Envios</a></li>
        <li><a href="">Contactanos</a></li>
        <li><a href="">Productos</a></li>
        <li> <CartWidget/> </li>   
      </ul>
    </div>
  </nav>
        
            
     
 </div>  </div>  ); 

};
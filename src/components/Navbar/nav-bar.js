import React from "react";
import CartWidget from "../CartWidget/index";
import {Link} from "react-router-dom";
export const NavBar = () => { return ( 

 <div>  
    
   
      <div class="header__menu">
     

      <nav>
    <div class="nav-wrapper">
     <Link to="/" class="brand-logo">Gea Aromas</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
    

      <li><Link to="/" >Envios</Link></li>  
      <li><Link to= {"/category/detalle"  } >Detalle</Link></li> 
      <li><Link to={"/category/lista"  }  >Lista</Link></li> 
     
    
        <li> <CartWidget/> </li>   
      </ul>
    </div>
  </nav>
        
            
     
 </div>  </div>  ); 

};
import React, { useState } from "react";
import Item from "../Item";


export function ItemCount ({stock, inicial, onAdd}) {

const [count, setCount] = useState (parseInt(inicial));

const agregar = () => { setCount (count + 1 )  ;  };

const remover = () => { setCount (count - 1 ) ;   };

const añadirCarrito = ()=> { alert("usted ah seleccionado "+ (count)+ " productos")};

    return (
        <div class="row">
        <div class="col s8 m3">
        
        <div class="card horizontal">
        <div class="card-stacked">
        <div class="card-content">
             
        <div class="card-image"> </div>
            <button 
                disabled={count <=0} 
                type= "button"
                onClick = {remover}
                class="btn-floating btn-medium waves-effect waves-light black"><i class="material-icons">remove</i></button>
               
               
            <a href class= "contador"> {count} </a>
               
               
            <button 
               disabled={count >= stock} 
               type= "button"
               onClick = {agregar}
               class="btn-floating btn-medium waves-effect waves-light black"><i class="material-icons">
                                                                                        add</i></button>
               
        </div>
           
        <div class="card-action">
        <button class="waves-effect waves-light btn" type="button" onClick= {()=> onAdd (count)} >
                                                                    Agregar al carrito</button>
        

        </div>
         </div>
        </div>
        </div>
      
      
        

      
      
        </div> )
               


}
export default ItemCount;





import React from 'react'
import {ItemCount} from "../ItemCount"
import {useState, useContext} from 'react';  
import { Link } from 'react-router-dom';
import {CartContext} from "../../context/CartContext"

export default function ItemDetail ( {item}  ) {
 
  const [qty, setQty] = useState (0)
  
  const {addItem}= useContext (CartContext);

  const onAdd = (quantityToAdd) => {

      const qty = parseInt (quantityToAdd)
      console.log ("se agrego un item", qty)
      addItem (item, qty)
      setQty (qty)

  }

   return <> <ul> 
                  <li>{item.id}</li>
                  <li>{item.nombre}</li>
                  <li>${item.precio}</li>
                  <li>{item.descripcion} </li>
                  <li>  <img src={item.pictureUrl} alt ="aca va una img"  style= { {width: "10rem"} } /> </li>

             </ul>
                { qty === 0 ?  
                <ItemCount stock="8" inicial="0" onAdd= {onAdd} /> :
                                                 <Link to='/cart'>
                                                   <button> Terminar mi compra </button>
                                                 </Link>  }                </>;




  }



/*import React from 'react'
import {ItemCount} from "../ItemCount"
import {useState, useContext} from 'react';  
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

export default function ItemDetail ( {item}  ) {

 const {addItem} = useContext (CartContext);
 
 
 
 
  const [count, setCount] = useState (0)

  const addHandler = (e) => {  console.log ("se agrego un item", e) ; setCount (e)   }

  const terminarCompra = () => {  addItem(item, count)  }

  return <ul>  
                  <li> {item.id} </li>
                  <li> {item.nombre} </li>
                  <li> ${item.precio}</li> 
                  <li>{item.descripcion}</li>
                  <li> <img src={item.pictureUrl} alt ="aca va una img"  style= { {width: "10rem"} } /></li>


                 {count === 0 ? 
                     <ItemCount stock="8" inicial="0" onAdd= {addHandler} ></ItemCount> :
                    <Link to='/cart' >  <button onClick= {terminarCompra} > Finalizar compra </button> </Link> 
                }




  </ul> 
  
  }
























import React from 'react'
import {ItemCount} from "../ItemCount"
import {useState, useContext} from 'react';  
import { Link } from 'react-router-dom';
import {CartContext} from "../../context/CartContext"

export default function ItemDetail ( {item}  ) {
 
  const [qty, setQty] = useState (0)
  
  const {addItem}= useContext (CartContext);

  const onAdd = (quantityToAdd) => {

      const qty = parseInt (quantityToAdd)
      console.log ("se agrego un item", qty)
      addItem (item, qty)
      setQty (qty)

  }

   return <>  <h4> {item.nombre} </h4> 
                { qty === 0 ?  
                <ItemCount stock="8" inicial="0" onAdd= {onAdd} /> :
                                                 <Link to='/cart'>
                                                   <button> Terminar mi compra </button>
                                                 </Link>  }                </>;




  }
 
  /* const addHandler = (e) => {  console.log ("se agrego un item", e) ; setCount (e)   };

  const terminarCompra = ()=> { addItem (item, count)    };

  */

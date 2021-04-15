import React from 'react'


export default function ItemDetail ( {item}  ) {
 
  
  return <ul>  
                  <li> {item.id} </li>
                  <li> {item.nombre} </li>
                  <li> ${item.precio}</li> 
                  <li>{item.descripcion}</li>
                  <li> <img src={item.pictureUrl} alt ="aca va una img"  style= { {width: "10rem"} } /></li>
    
    
    
  </ul> 
  
  }



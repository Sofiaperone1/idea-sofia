import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import {ItemList} from "../ItemList/index";
import {useParams} from "react-router-dom"



export default function ItemListContainer () {
 
  const [items, setItems] = useState ([])
  
  const {categoryId} = useParams ()
 
  const datos = [ 
  
    {id:1, nombre:"Velas",categoria:'detalle', precio:200, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_859251-MLA26646040874_012018-O.webp" },
  {id:2, nombre:"Sahumerios",categoria:'detalle', precio:150, pictureUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/604/489/products/sahucanva1-cfacf168fcd896de0715221684219844-640-0.jpg" },
  {id:3, nombre:"Sales",categoria:'detalle', precio:350, pictureUrl:"https://http2.mlstatic.com/sales-de-bano-D_NQ_NP_822421-MLM20754894508_062016-O.jpg" },
  {id:4, nombre:"Bombitas",categoria:'lista', precio:300, pictureUrl:"https://th.bing.com/th/id/OIP.JuEZdzo9OFiu_JUNbwVPigHaFj?pid=ImgDet&rs=1" },
  {id:5, nombre:"Carbones",categoria:'lista', precio:280, pictureUrl:"https://www.eldurapi.be/cms/CustomMedia/photos/Pages/es-eldurapi-AROMATICO-CARBON-DE-COCO_389_2.jpg" },
  {id:5, nombre:"Recipientes",categoria:'lista', precio:275, pictureUrl:"https://th.bing.com/th/id/OIP.e1Oo-H8HPVjzu1A4y0mq8AHaHN?pid=ImgDet&w=600&h=584&rs=1" }
  ] 
  
  useEffect ( ()=> { 
   
    const promesa =new Promise ( (resolve)=> { 
            setTimeout ( ()=> { if (categoryId) {resolve (datos.filter (e => e.categoria === categoryId) ) }
                                else {resolve (datos)} } , 2000  )
       }  )
     
       promesa.then ( (resultado)=> { setItems (resultado) } )
     
       promesa.then ( (datos)=> { setItems (datos) } )   },[categoryId] )

return <div class= "itemLista" >
    
        Items de la categoria {categoryId}

        <ItemList items={items}> </ItemList>

        <ItemCount stock="8" inicial="1"></ItemCount>


       </div>
       
;
}






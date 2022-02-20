//import React, { useEffect, useState } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   const { data, loading}  = useFetchGifs(category);
   //console.log(state);

/*   const [images, setImages] = useState([]);
  useEffect( () =>{
    getGifs(category)
       .then( imgs => setImages(imgs) ); //.then( setImages );

  },[category]);

   */

  //getGifs();

  return( 
    <>    
           <h3 class="animate__animated animate__bounce"> { category }</h3>

           { loading && <p>Loading..</p> }

           <div className='cardGrid'> 
             
              <ol>
                  {
                      data.map((img) => (
                        <GifGridItem
                            key={img.id}
                            { ...img }

                          />
                      ))
              }
              </ol>  
           </div>
     </>   
  )
}

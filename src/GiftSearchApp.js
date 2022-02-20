
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftSearchApp = () => {
   // const categories =['One Piece', 'Naruto', 'Dragon Ball'];
    
    const [categories, setCategories] = useState(['One Piece' ]);
  /*  const handleAdd =( )=> {
        //setCategories ([ 'Attack on Titan', ...categories,]);
        setCategories( cats=> ['Attack on Titan', ...cats]);
    }
 */
   return (
    <div>
        <h2 class="animate__animated animate__swing">GiftSearchApp</h2>
        <hr/>

        <AddCategory setCategories={setCategories} />

      <ol>
            {
                categories.map( (category) => (
                 <GifGrid
                 key={ category }
                  category={ category }
                  

                 />
                ))
            }
        </ol>
    </div>
  );
};

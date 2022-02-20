import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";





export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true

    });

  /*   setTimeout(() => {
        setState(
            {
                data:[],
                loading:false
            }
        )
    }, 3000); */
    useEffect( () => {
        getGifs(category)
            .then( imgs => {
                setTimeout(() => {
                    //console.log(imgs);
            
                    setState({
                        data:imgs,
                        loading:false
                    })
                  }, 3000);
               
           }); //.then( setImages );
    
      },[category]);

    return state; //  {data: [], loading: true}

};

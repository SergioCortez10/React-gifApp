import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


const useFechGifs = (categoria) => {
  const [state, setstate] = useState({
      data:[],
      loading:true,
  })

  useEffect(()=>{
    getGifs(categoria)
    .then(imgs =>{
        setstate({
            data:imgs,
            loading:false
        });
    })
  },[categoria])


  return state;
}

export default useFechGifs
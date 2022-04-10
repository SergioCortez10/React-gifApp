import React,{useState} from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Vikingos'])
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>
            
            <ol>
                {categorias.map ( categoria=> (
                    <GifGrid key={categoria} categoria={categoria}/>
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp
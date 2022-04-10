import Reac from 'react'
import GifGridItem from './GifGridItem'
import useFechGifs from '../hooks/useFechGifs'

const GifGrid = ({categoria}) => {

    const {data:images,loading} = useFechGifs(categoria);

    return (
        <>

            <h3 className='animate__backInDown'>{categoria}</h3>
            {loading && <p className='animate__tada'>Cargando...</p>}
            <div className='card-grid'>
                    {
                        images.map( img => (
                        <GifGridItem key={img.id} {...img} />
                        ))
                    }
            </div>
        </>
        
    )
}

export default GifGrid
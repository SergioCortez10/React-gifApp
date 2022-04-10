import React,{useState} from 'react'
import PropType from 'prop-types'

const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('')
    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategorias(cats => [inputValue,...cats])
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleInputChange} />
        </form>
    )
}

AddCategory.propType = {
    setCategorias: PropType.func.isRequired
}

export default AddCategory
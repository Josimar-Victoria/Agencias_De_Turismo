import React, { useState } from 'react'
import '../Styles/comentariForm.css'
export const ComentariForm = (props) => {
    const [inputText, setInputText] = useState("")
    const [validacion, setvalidacion] = useState(true)

    const manejarFormulario = (e) => {
        setInputText(e.target.value)
        console.log(inputText);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputText.trim() !== ""){
            props.nuevaTarea(inputText)
            setInputText("")
            setvalidacion(true)
        }else{
            setvalidacion(false)
        }
        
    }
    return (
        <div className=''>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Añadir Comentario</h3>
                <input value={inputText} onChange={manejarFormulario} type='text' placeholder='comentari'/>
                <button>Agregar</button>
            </form>
        {
            !validacion &&
            <div className='validacion'>añade un comentario por favor</div>
        }
        </div>
    )
}
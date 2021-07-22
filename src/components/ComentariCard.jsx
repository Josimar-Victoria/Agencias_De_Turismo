/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/comentariCard.css'

export const ComentariCard = (props) => {
    const [ModoEdit, setModoEdit] = useState(false)
    const [EditText, setEditText] = useState("")

    const editar = () => {
        setModoEdit(true)
    }
    const borrarTareas = () => {
        props.borrar(props.id)
    }
    const manejarEditInput = (e) => {
        setEditText(e.target.value)
    }
    const handleSutmidEdit = (e) => {
        e.preventDefault();
        props.atualuazarTareas(props.id, EditText);
            setEditText("");
            setModoEdit(false)
    }


    return (
        <div>
        {
            !ModoEdit ?
            <div>
    <ul className="cards">
        <li>
        <Link to="#!" className="card">
            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
            <div className="card__overlay">
            <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src='https://i.imgur.com/7D7I6dI.png' alt="" />
                <button className="card__buttom" onClick={editar}>Editar</button>
                <button className="card__buttom" onClick={borrarTareas}>Borrar</button>
                <div className="card__header-text">
                <h3 className="card__title"></h3>            
                <span className="card__status"></span>
                </div>
            </div>
            <p className="card__description">{props.tarea}</p>
            </div>
        </Link>      
        </li>
        <hr />
    </ul>
                

            </div>
            :
            <form className='sub__form' onSubmit={handleSutmidEdit}>
                <input value={EditText} onChange={manejarEditInput} placeholder="Editar Comentario" />
                <button>Guaradar</button>
            </form>
        }
        </div>
    )
}
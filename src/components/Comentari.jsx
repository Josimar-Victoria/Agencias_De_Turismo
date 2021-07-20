import React from 'react'
import '../Styles/comentari.css'
import { Link } from 'react-router-dom'
import cometario from '../comentari.json'


export const Comentari = ({coment}) => {
    console.log(cometario);
return(
<>
        <ul className="cards">
        <li>
        <Link to="#!" className="card">
            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
            <div className="card__overlay">
            <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src={coment.image} alt="" />
                <div className="card__header-text">
                <h3 className="card__title">{coment.nombre}</h3>            
                <span className="card__status">{coment.hora}</span>
                </div>
            </div>
            <p className="card__description">{coment.description}</p>
            </div>
        </Link>      
        </li>
        <hr />
    </ul>
</>

)
}
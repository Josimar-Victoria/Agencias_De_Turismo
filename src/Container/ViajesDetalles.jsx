import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/viajesDetalles.css'
export const ViajesDetalles = () => {


    return (
        <div className="detalles_container">
            <img className="col detalles_img" src='https://images.unsplash.com/photo-1594888164652-d03cd393ace2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80' alt="" />
            <div className='col viajes_details'>
                <h2 className='first_item' >Italia</h2>
                <p>lorem ipsum dolor sit amet jksmxlmxoon xkjbcbbxllnzjjx lxksjosimar es el mejor programador de la istoria junto a harry campaz y sus ssecuases de la programacion lorem, consectetur adipiscing lorem. lorem78ñl</p>
            </div>
            <div className="container_buttom">
                <Link className="buttom_Detalle" to="/">Viajar</Link>
            </div>
        </div>
    )
}
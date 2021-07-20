import React from 'react'
import viaje from '../viajes.json'
import comentario from '../comentari.json'
import '../Styles/Grid.css'
import { ViajesCard } from './ViajesCard';
import { Link } from 'react-router-dom';
import { Comentari } from './Comentari';
export const ViajesGrid = () => {
    
    return(
        <>
            <Link to='#' className='buttom__init'>
                <h1 className='viajes_title'>Dare To Meet</h1>
            </Link>
            
            <ul className='Grid'>
                {viaje.map((viajes) => (
                    <ViajesCard key={viajes.pais} viajes={viajes}/>
                ))}
            </ul>
            <div className="comentari_container">
                <h1 className='comentari_text' >comentari</h1>
            </div>
            <ul className='Grid'>
                {comentario.map((coment) => (
                    <Comentari key={coment.hora} coment={coment}/>
                ))}
            </ul>
            
            
        </>
    )
}
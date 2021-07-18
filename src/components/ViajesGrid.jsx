import React from 'react'
import viaje from '../viajes.json'
import '../Styles/viajesGrid.css'
import { ViajesCard } from './ViajesCard';
import { Link } from 'react-router-dom';
export const ViajesGrid = () => {
    console.log(viaje);
    return(
        <>
            <Link to='#' className='buttom__init'>
                <h1 className='viajes_title'>Dare To Meet</h1>
            </Link>
            
            <ul className='viajesGrid'>
                {viaje.map((viajes) => (
                    <ViajesCard key={viajes.pais} viajes={viajes}/>
                ))}
            </ul>
        </>
    )
}
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import '../Styles/viajesCard.css'
export const ViajesCard = ({viajes}) => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
                <img className="viajes_img" src={viajes.image} alt={viajes.pais}/>
                <strong className="viajes_pais" >{viajes.pais}</strong>
                <p className="viajes_description">{viajes.description}</p>
                <Button className='button_card'>Viajar</Button>
        </div>
    )
}

const useStyles = makeStyles (() => ({
    container: {
        width: '300px',
        height: 'auto',
        
        
    }
}))
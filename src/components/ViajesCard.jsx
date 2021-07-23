import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

export const ViajesCard = ({viajes}) => {
    const history = useHistory()
    const classes = useStyles();


    return(
        <div className={classes.container}>
        <NavLink className={classes.NavLink_img} to={'/viajes/' + viajes.id}>
        <img className={classes.viajes_img} src={viajes.image} alt={viajes.pais}/>
        <strong className={classes.viajes_pais} >{viajes.pais}</strong>
        </NavLink>
                <p className="viajes_description">{viajes.description}</p>
                <IconButton className={classes.button_card}  onClick={()=> history.push("/informacion") }>Viajar</IconButton>
        </div>
    )
}

const useStyles = makeStyles (() => ({
    container: {
        width: '300px',
        height: 'auto',
        margin: '0 auto',
        marginRight: '20%'
    },
    NavLink_img:{
    margin: '0 auto',
    },
    viajes_img:{
        width: '300px',
        maxWidth: '100%',
       
    },
    viajes_pais:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        marginTop: '15px'
    },
    button_card:{
        border: 'none',
        padding: '3px',
        borderRadius: '7px',
        backgroundColor: '#fff',
        color: '#000'
    },
}))
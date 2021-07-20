import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Styles/profile.css'
import { makeStyles } from '@material-ui/core';

export const ProfileD = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();
    const classes = useStyles();
    if(isLoading) {
        return <h1>cargando......</h1>
    }
    return(
        isAuthenticated && (
            <div className={classes.container_profile}>
                <img className={classes.img_profile} src={user.picture} alt={user.name}/>
                <p className={classes.name_profile}>{user.name}</p>
            </div>
        )
    )
}

const useStyles = makeStyles (() => ({
    container_profile:{
        left: '20rem'
    },
    img_profile: {
        marginTop: '1rem',
        borderRadius: '18px',
        width: '30px',
        marginLeft: '39px'
    },

    name_profile: {
        display: 'flex',
        fontSize: '1rem',
        margin: '0',
        
    }
}))
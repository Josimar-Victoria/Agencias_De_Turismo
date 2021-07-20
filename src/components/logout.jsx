import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IconButton, makeStyles } from '@material-ui/core';

export const Logout = () => {
    const {logout} = useAuth0();
    const classes = useStyles();
    return(
        <IconButton className={classes.iconbuttom} 
        onClick={() => logout({returnTo: window.location.origin})}>Logout!
        </IconButton>
    )
}

const useStyles = makeStyles (() => ({
    iconbuttom: {
        bottom: '1.3rem',
        left: '25%',
        fontSize: '15px',
        color: '#fff',
      
        
    }
}))
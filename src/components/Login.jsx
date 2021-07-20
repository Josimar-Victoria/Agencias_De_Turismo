import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IconButton, makeStyles } from '@material-ui/core'

export const Login = () => {
    const { loginWithRedirect} = useAuth0()
    const classes = useStyles();
    return(
        <IconButton className={classes.iconButtom} 
        onClick={() => loginWithRedirect()}>Sign up!
        </IconButton>
    )
}

const useStyles = makeStyles (() => ({
    iconButtom: {
        bottom: '1.5rem',
        display: 'flex',
        left: '20%',
        fontSize: '15px',
        color: '#fff',
        
    }
}))
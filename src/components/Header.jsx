/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/header.css'
import { IconButton, makeStyles } from '@material-ui/core'
import logo from '../imgSlider/logo.png'
import { BiPhone } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom'

export const Header = () => {
    const classes = useStyles();
    const history = useHistory()
    return (
        <>
            <nav className={classes.menu}>
                <IconButton className={classes.iconButton} onClick={()=> history.push("/")}>
                    <img className={classes.logo} src={logo} alt='logo'/>
                </IconButton>
                <ul className={classes.menu_list}>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/about">About</Link></li> 
                    <li><Link to="#">Servicios</Link></li> 
                    <li><Link to="#">Contact</Link></li> 
                </ul>
                
                    <div className={classes.contact_number}>
                        <p className={classes.contact_title}>CONTACTANOS</p>
                        <BiPhone/> <p className={classes.number_contact}>3177825664</p>
                    </div>
                    
            </nav>
        </>
    )
}

const useStyles = makeStyles (() => ({
    menu: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
    },
    menu_list: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: '70px',
    },
    contact_number: {
        marginLeft: '70px',
        marginTop: '1rem',
        display: 'flex',
        backgroundColor: '#000',
        borderRadius: '10px',
        height: '45px',
        padding: '20px',
        fontSize: '20px'
    },
    contact_title:{
        display: 'flex',
        textAlign: 'center'
    },
    number_contact: {
        display: 'flex',
        alignItems: 'center'
    },
    iconButton: {
        bottom: '1.2rem',
        
    }
}))
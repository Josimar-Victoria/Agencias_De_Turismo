/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/header.css'
import { IconButton } from '@material-ui/core'
import logo from '../imgSlider/logo.png'
import { BiHotel } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom'
import { GiCommercialAirplane } from "react-icons/gi";
import { Login } from './Login'; 
import { Logout } from './logout';
import { ProfileD } from './ProfileD';
import { useAuth0 } from '@auth0/auth0-react';


export const Header = () => {
    const { isAuthenticated } = useAuth0();
    const history = useHistory()
    return (
        <div className='header'>
        
            <nav className='menu'>
                <IconButton className='iconButton' onClick={()=> history.push("/")}>
                    <img className='logo' src={logo} alt='logo'/>
                </IconButton>
                <ul className="menu_list" >
                    <li><Link className="menu_link" to="/"><GiCommercialAirplane/> Viajes</Link></li> 
                    <li><Link className="menu_link" to="/about"><BiHotel/>Hoteles</Link></li> 
                    <li><Link className="menu_link" to="#">Servicios</Link></li> 
                    <li><Link className="menu_link" to="#">Contact</Link></li> 
                </ul>
                
            </nav>

            {
                    isAuthenticated ? <>
                    <Logout/>
                <ProfileD/>
                    </>
                    :<Login/>
                }
        </div>
    )
}

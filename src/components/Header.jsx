/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="menu">
            <ul className="menu_list">
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/about">About</Link></li> 
                <li><Link to="#">Servicios</Link></li> 
                <li><Link to="#">Contact</Link></li> 
            </ul>
        </nav>
    )
}

import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Header.css"; 

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <h2 className="logo">AD<span>IT</span></h2>
                <ul className='navbar-list'>
                    <li><Link to={'/'} className="nav-link">Beranda</Link></li>
                    <li><Link to={'/Tentangsaya'} className="nav-link">Tentang Saya</Link></li>
                    <li><Link to={'/Karya'} className="nav-link">Karya</Link></li>
                    <li><Link to={'/Kontak'} className="nav-link">Kontak</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Header;
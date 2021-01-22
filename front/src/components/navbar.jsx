import React from 'react';
import { Link } from 'react-router-dom';
import LogoProtegePyme from '../img/logoProtegePyme.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg personalColor">
            <Link className="navbar-brand" to="/"> <img src={LogoProtegePyme} alt="ProtegePyme" width="150" height="75" />  </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Conoceme!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contacto</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-success rounded-pill" to="#">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="container">
            <Navbar bg="light" variant="light" className="background">
                <Navbar.Brand className="brand-logo">
                    <Link to="/home">
                        <img src={logo} alt=""/>
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/home"><span className="nav-item"><button className="btn-color button-size">Home</button></span></Link>

                    <Link to="/login"><span className="nav-item"><button className="btn-color button-size">Login</button></span></Link>

                    <Link to="/events"><span className="nav-item"><button className="btn-color button-size">Events</button></span></Link>               
                    
                    <Link to="/admin"><span className="nav-item"><button className="btn-color button-size">Admin Panel</button></span></Link>
                </Nav>
                
                
                
            </Navbar>
        </div>
    );
};

export default Navigation;
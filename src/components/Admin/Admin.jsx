import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Group 1329.png';
import userLogo from '../assets/logos/users-alt 1.png';
import plusLogo from '../assets/logos/plus 1.png';
import Volunteers from '../Volunteers/Volunteers';

const Admin = () => {

    const [volunteer, setVolunteer] = useState([]);

    return (
        <div className="container-fluid mt-5">
            <div className="heading-part d-flex">
                <Link to="/home">
                    <img id="logo-icon" src={logo} alt=""/>
                </Link>
                <h3>Total Registered Volunteer : {volunteer.length}</h3>
            </div>

            <Row className="container-fluid volunteer-side">
                <Col sm={3}>
                    <div className="volunteer-left-part">
                        <div className="d-flex register-one">
                            <img id="logo-user" src={userLogo} alt=""/>
                            <h6>Volunteer Register list</h6>
                        </div>
                        <div className="d-flex register-two">
                            <Link to="/AddEvent" className="d-flex register-one">
                                <Button variant="primary" id="event-btn-admin">
                                    <img id="logo-plus" src={plusLogo} alt=""/>
                                    Add Event
                                </Button>
                            </Link>
                            
                        </div>
                        <div className="d-flex register-two">
                            <Link to="/AddAdmin" className="d-flex register-one">
                                <Button variant="primary" id="event-btn-admin">
                                    <img id="logo-plus" src={plusLogo} alt=""/>
                                    Add Admin
                                </Button>
                            </Link>
                            
                        </div>
                    </div>
                </Col>

                <Col sm={9} className="volunteer-list-part">
                    
                    <div className="cart row ">
                        <div className="tag-line d-flex container-fluid">
                            <Row>
                                <Col sm={3} >
                                    <div className="volunteer-detail">
                                        <h6>Name</h6>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="volunteer-detail">
                                        <h6>Email ID</h6>
                                    </div>
                                </Col>
                                <Col sm={2}>
                                    <div className="volunteer-detail">
                                        <h6 id="resister">Registry date</h6>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div id="volunteer" className="volunteer-detail">
                                        <h6>Volunteer list</h6>
                                    </div>
                                </Col>
                                <Col sm={1}>
                                    <div className="volunteer-detail">
                                        <h6>Action</h6>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                        <div className="container row d-flex">
                            {
                                volunteer.map((volunteer) => <Volunteers key={volunteer._id} usr={volunteer}></Volunteers>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default Admin;
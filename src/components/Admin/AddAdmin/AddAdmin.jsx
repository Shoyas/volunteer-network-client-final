import React, { useContext } from 'react';
import './AddAdmin.css';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png';
import userLogo from '../../assets/logos/users-alt 1.png';
import plusLogo from '../../assets/logos/plus 1.png';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {register, handleSubmit, errors} = useForm();
    
    const onSubmit = (admin) => {
        console.log("Clicked...");
        
    }
    return (
        <div>
            <div className="heading-part d-flex mt-5">
                <Link to="/home">
                    <img id="logo-icon" src={logo} alt=""/>
                </Link>
                <h3>Add Admin</h3>
            </div>

            <Row className="volunteer-side">
                <Col sm={3}>
                    <div className="volunteer-left-part">
                        <Link to="/VolunteerList" className="d-flex register-for-event">
                            <img id="logo-user" src={userLogo} alt=""/>
                            <h6>Volunteer Register list</h6>
                        </Link>
                        <div className="d-flex register-two">
                            <Link to="/AddEvent">
                                <Button variant="primary" id="event-btn-admin">
                                    <img id="logo-plus" src={plusLogo} alt=""/>
                                    Add Event
                                </Button>
                            </Link>
                        </div>
                        <div className="d-flex register-two">
                            <Button variant="primary" id="event-btn">
                                <img id="logo-plus" src={plusLogo} alt=""/>
                                Add Admin
                            </Button>
                        </div>
                    </div>
                </Col>

                <Col sm={9} className="volunteer-border addEvent-body">
                    <Row>
                        <Col sm={12} >
                            <div className="volunteer-detail">
                                <div className="admin-form mt-5 mb-5">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h4 className="mb-3">Enter email address for making admin</h4>
                                        <div className="d-flex mb-5">
                                            <input type="email" ref={register({ required: true })} name="email" className="form-control form-element" placeholder="Email address"/>
                                            <button type="submit" style={{'margin-left':'20px'}} class="btn btn-success">Submit</button> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            
        </div>
        
    );
};

export default AddAdmin;
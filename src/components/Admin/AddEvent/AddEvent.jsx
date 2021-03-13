import React, { useState } from 'react';
import './AddEvent.css';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import logo from '../../assets/logos/Group 1329.png';
import userLogo from '../../assets/logos/users-alt 1.png';
import plusLogo from '../../assets/logos/plus 1.png';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';


const AddEvent = () => {
    const {  handleSubmit } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    const onSubmit = (data) => {
        console.log("Clicked...");

        
    }
    return (
        <div>
            <div className="heading-part d-flex mt-5">
                <Link to="/home">
                    <img id="logo-icon" src={logo} alt=""/>
                </Link>
                <h3>Add Event</h3>
            </div>

            <Row className="volunteer-side">
                <Col sm={3}>
                    <div className="volunteer-left-part">
                        <Link to="/VolunteerList" className="d-flex register-for-event">
                            <img id="logo-user" src={userLogo} alt=""/>
                            <h6>Volunteer Register list</h6>
                        </Link>
                        <div className="d-flex register-two">
                            <Button variant="primary" id="event-btn">
                                <img id="logo-plus" src={plusLogo} alt=""/>
                                Add Event
                            </Button>
                        </div>
                        <div className="d-flex register-two">
                            <Link to="/AddAdmin">
                                <Button variant="primary" id="Add-btn-event">
                                    <img id="logo-plus" src={plusLogo} alt=""/>
                                    Add Admin
                                </Button>
                            </Link>
                        </div>
                        
                    </div>
                </Col>

                <Col sm={9} className="volunteer-border addEvent-body">
                    <Row>
                        <Col sm={12} >
                            <div className="volunteer-detail">
                                <form onSubmit={handleSubmit(onSubmit)}  className="d-flex">
                                    <span className="Event-part-one">
                                        <h6>Event Title</h6>
                                        <input type="text" name="" placeholder="Enter title" id="event-title"/>
                                        <br/>
                                        <br/>
                                        <h6>Description</h6>
                                        <textarea type="text" name="" placeholder="Enter description" id="event-description"/>
                                    </span>
                                    <span className="Event-part-two">
                                        <h6>Event Date</h6>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid>
                                                
                                                <TextField
                                                    id="date"
                                                    // label="Date"
                                                    type="date"
                                                    format="dd/MM/yyyy"
                                                    className="input-type"
                                                    margin="normal"
                                                    // defaultValue="2017-05-24"
                                                    // className={class.textField}
                                                    defaultValue={selectedDate}
                                                    onChange={handleDateChange}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                        <h6>Banner</h6>
                                        <input type="file" name="" id=""/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        
                                    </span>
                                    <input type="submit" id="submit-btn" value="Submit"/>
                                </form>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            
        </div>
    );
};

export default AddEvent;
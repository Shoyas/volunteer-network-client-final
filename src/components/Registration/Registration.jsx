import React, { useContext, useState } from 'react';
import './Registration.css';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../assets/logos/Group 1329.png';

const Registration = () => {
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const userName = loggedInUser.name;
    const useEmail = loggedInUser.email;

    const clickOnRegistrationForm = (event) => {
        const newUser = {userName, useEmail, selectedDate, name};
        console.log(newUser);

        console.log("Watching", newUser);
        
    }

    return (
        <div className="container log-in">
            <div className="logo-style">
                <Link to="/home">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="registration-form">
                <div className="registration-form-article">
                    <h4>Registration as a Volunteer</h4>
                    <br/>
                    <br/>
                    <form action="">
                        <input type="text" className="input-type" name="name" defaultValue={loggedInUser.name} placeholder="Full Name" id=""/>
                        <br/>
                        <br/>
                        <input type="email" className="input-type" name="email" defaultValue={loggedInUser.email} placeholder="Email" id=""/>
                        
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid >   
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
                            <br/>
                        <input type="text" className="input-type" name="itemName" defaultValue={`${name}`} id=""/>
                        <br/>
                        <br/>
                        <Link to="/UserActivities"><button onClick={(event) => clickOnRegistrationForm(event)}  className="googleInput">Registration</button></Link>
                    </form>
                    
                </div>
            </div>

            

        </div>
    );
};

export default Registration;
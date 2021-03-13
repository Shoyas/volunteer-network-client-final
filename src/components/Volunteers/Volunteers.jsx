import React from 'react';
import { Col, Row } from 'react-bootstrap';
import trash from '../assets/logos/trash-2 9.png';
import './Volunteers.css';

const Volunteers = (props) => {
    const user = props.usr;
    const {userName, useEmail, selectedDate, name} = user;

    return (
        <div className="d-flex volunteer-background container-fluid">
            <Row>
                <Col sm={3} >
                    <div className="volunteer-item">
                        <h6 id="userName">{userName}</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="volunteer-item">
                        <h6 id="email">{useEmail}</h6>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className="volunteer-item date-space">
                        <h6 id="selectedDate">{new Date(selectedDate).toDateString('dd/MM/yyyy')}</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="volunteer-item name-space">
                        <h6 id="name">{name}</h6>
                    </div>
                </Col>
                <Col sm={1}>
                    <div className="volunteer-item trash-space">
                        <img id="trash" src={trash} alt=""/>
                    </div>
                </Col>
            </Row>


            

        </div> 
    );
};

export default Volunteers;
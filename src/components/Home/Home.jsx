import React from 'react';
import Navigation from './Navigation/Navigation';
import './Home.css';
import Body from './Body/Body';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <h2 className="header-line">I GROW BY HELPING PEOPLE IN NEED.</h2>
            <Body/>
        </div>
    );
};

export default Home;
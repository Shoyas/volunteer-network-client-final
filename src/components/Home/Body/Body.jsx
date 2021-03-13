import React, { useEffect, useState } from 'react';
import './Body.css';
import Card from './Card/Card';
import fakeData from '../../fakeData/fakeData';


const Body = () => {

    const [item, setItem] = useState(fakeData);

    

    return (
        <div className="text-center">
            <input className="search-item mt-5 mb-5" type="search" name="search" placeholder="Search..." id=""/>
            <button className="search-btn">Search</button>
            <div className="cart container container-fluid d-flex">
                <div className="row">
                    {
                        item.map((item) => <Card key={item.id} itm={item}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Body;
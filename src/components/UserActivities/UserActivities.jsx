import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './UserActivities.css';
import UserActivity from './UserActivity';

const UserActivities = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [activity, setActivity] = useState([]);
    console.log(activity);
    

    return (
        <div>
            <h3>You have: {activity.length} </h3>
            {
                activity.map(user => <li>{user.userName} {user.useEmail} {user.name}</li> )
            }
            {/* {
                activity.map(user => <UserActivity user={user}></UserActivity> )
            } */}
        </div>
    );
};

export default UserActivities;
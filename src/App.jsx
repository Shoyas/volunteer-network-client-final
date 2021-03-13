import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Navigation from './components/Home/Navigation/Navigation';
import Body from './components/Home/Body/Body';
import Registration from './components/Registration/Registration';
import UserActivities from './components/UserActivities/UserActivities';
import AddEvent from './components/Admin/AddEvent/AddEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <div className="body">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/events">
                            <Navigation/>
                            <Body />
                        </Route>
                        <PrivateRoute path="/registration/:name">
                            <Registration />
                        </PrivateRoute>
                        <Route path="/registration">
                            <Registration />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/UserActivities">
                            <UserActivities />
                        </Route>
                        <Route path="/AddEvent">
                            <AddEvent />
                        </Route>
                        <Route path="/VolunteerList">
                            <Admin />
                        </Route>
                        <Route path="/AddAdmin">
                            <AddAdmin />
                        </Route>

                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    )
}

export default App

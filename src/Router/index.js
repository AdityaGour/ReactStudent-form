import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import React from 'react';
import User from '../pages/userDetails';
import LoginForms from '../pages/login/login-container';
import history from './history';
import Register from '../pages/register/register'
import ShowStudentsList from '../pages/all-students'


const RouterComponent = () => {
    return (
            <Router history={history} >
                <Switch>
                    <Route exact path="/" component={Register} />
                    <Route exact path="/login" component={LoginForms} />
                    <Route path="/userDetails" component={User} />
                    <Route path="/register" component={Register} />
                    <Route path="/showStudents" component={ShowStudentsList} />
                </Switch>
            </Router>
      
    )
}


export default RouterComponent;
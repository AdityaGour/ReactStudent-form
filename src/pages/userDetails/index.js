import React, { Component } from "react";
import { connect } from 'react-redux';
import { register } from '../../action/auth';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        alert('userDetails' + JSON.stringify(this.props.userDeatils));
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const register = {
            uid: uuidv4(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            dob: this.state.dob,
            fatherName: this.state.fatherName,
            country: this.state.country,
            email: this.state.email,
            password: this.state.password,
        }
        alert('Register' + JSON.stringify(register))
        this.props.register(register).then((res) => {
            console.log('userLogin' + JSON.stringify(res));
        })
    }
    render() {
        return (
            <div className="mainSection">
                <div className="formSection">


                    {this.props.userDeatils && <ul className="list-group">
                        <li className="list-group-item">First Name: {this.props.userDeatils.user.firstName}</li>
                        <li className="list-group-item">Last Name: {this.props.userDeatils.user.lastName}</li>
                        <li className="list-group-item">Email {this.props.userDeatils.user.email}</li>
                        <li className="list-group-item">Father Name: {this.props.userDeatils.user.fatherName}</li>
                        <li className="list-group-item">Gender : {this.props.userDeatils.user.gender}</li>
                        <li className="list-group-item">DOB: {this.props.userDeatils.user.dob}</li>
                        <li className="list-group-item">Address: {this.props.userDeatils.user.address}</li>
                        <li className="list-group-item">Country: {this.props.userDeatils.user.country}</li>
                    </ul>}




                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userDeatils: state.login.userDeatils,
});

export default connect(mapStateToProps, null)(User);
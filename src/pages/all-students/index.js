

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allStudentsRecords } from '../../action/auth';
import './style.css';

class ShowStudentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents:[]
        }
    }
    componentDidMount(){
        this.props.allStudentsRecords().then((res) => {
            console.log('all the Studenets' + JSON.stringify(res))
            this.setState({allStudents:res.payload})
        });
    }

    render() {
        return (
            <div className="mainSection">
                <div className="formSection">
                    <div className="formtagSection">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">UID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Father Name</th>
                                    <th scope="col">Email </th>
                                    <th scope="col">Gender </th>
                                    <th scope="col">DOB </th>
                                    <th scope="col">Address </th>
                                    <th scope="col">Country </th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allStudents.map((user,index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index +1 }</th>
                                            <td>{user.uid}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.fatherName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.dob}</td>
                                            <td>{user.address}</td>
                                            <td>{user.country}</td>
                                            <td>{user.role}</td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userDeatils: state.login.userDeatils,
    allStudents: state.students.allStudentsDetails
});
export default connect(mapStateToProps, {allStudentsRecords})(ShowStudentsList)
import React, { Component } from "react";
import { connect } from 'react-redux';
import { register } from '../../action/auth';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            country: '',
            firstName: '',
            lastName: '',
            fatherName: '',
            address: '',
            dob: '',
            gender: '',
            selectedFile: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // On file upload (click the upload button) 
    onFileUpload = async() => {

        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        // formData.append('image', {
        //     uri: data.url, //Your Image File Path
        //     type: data.type,
        //     name: data.name,
        //   })
        formData.append(
            "file",{
                uri:this.state.selectedFile,
                type: this.state.selectedFile.type,
               name: this.state.selectedFile.name
            }
           
        );

        // Details of the uploaded file 
        console.log('checking'+ JSON.stringify(formData) );

        // Request made to the backend api 
        // Send formData object 
        const response =  await fetch('http://localhost:5000/api/upload', {method:'POST',headers:{
        },body:JSON.stringify(formData)} );
            return   response.json();
        // axios.post("api/uploadfile", formData); 
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
        {
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
            this.props.register(register).then((res) => {
                console.log('userLogin' + JSON.stringify(res));
                this.props.history.push('/userDetails');
            })
        } else{
            alert("You have entered an invalid email address!")
        }
         
        
    }

    uploadImage = (event) => {
        event.preventDefault();
        console.log('file Upload' + JSON.stringify(event));
    }
    // On file select (from the pop up) 
    onFileChange = event => {
console.log(event.target.files[0])
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });

    };

    render() {
        return (
            <div className="mainSection">
                <div className="formSection">
                    <form className="formtagSection" onSubmit={this.handleSubmit}>
                        <h3 style={{ textAlign: 'center' }}>Sign Up</h3>

                        <div className="form-group formdivSection">
                            <div className="" style={{ width: '48%' }}>
                                <label>First name</label>
                                <input type="text" name="firstName" value={this.state.firstName} className="form-control" placeholder="First name" onChange={this.handleChange} />
                            </div>
                            <div style={{ width: '48%' }}>
                                <label>Last name</label>
                                <input type="text" name="lastName" value={this.state.lastName} className="form-control" placeholder="Last name" onChange={this.handleChange} />
                            </div>

                        </div>



                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Addreess</label>
                            <textarea name="address" className="form-control" value={this.state.address} placeholder="Address name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group formdivSection">
                            <div style={{ width: '48%' }}>
                                <label>Father name</label>
                                <input type="text" name="fatherName" value={this.state.fatherName} className="form-control" placeholder="Father name" onChange={this.handleChange} />
                            </div>
                            <div style={{ width: '48%' }}>
                                <label>Country</label>
                                <input type="text" name="country" value={this.state.country} className="form-control" placeholder="Country" onChange={this.handleChange} />
                            </div>

                        </div>
                        <div className="form-group formdivSection">

                            <div style={{ width: '48%' }}>
                                <label >Select Gender</label><br />
                                <select name="gender" id="gender" onChange={this.handleChange} value={this.state.gender} >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div style={{ width: '48%' }}>
                                <label >Select DOB</label>
                                <input type="date" id="dob" name="dob" value={this.state.dob} onChange={this.handleChange} />

                            </div>
                        </div>



                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/login">sign in?</a>
                        </p>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default connect(null, { register })(Register);
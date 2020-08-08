import React from 'react';
import {connect } from 'react-redux';
import {login} from '../../action/auth'
import './style.css';

class LoginForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
        const post = {
            email: this.state.email,
            password: this.state.password,
          }
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){
            this.props.login(post).then((res)=>{
                console.log('userLogin'+ JSON.stringify(res.payload.user));
                const {role} = res.payload.user
                if(role == 'admin'){
                  this.props.history.push('/showStudents');
                } else{
                  this.props.history.push('/userDetails');
                }
                
            })
          } else{
            alert("You have entered an invalid email address!")
          }
          
      }

    render() {
        return (
            <div className="mainSection">
                <div className="formSection">
               
                <form className="formtagSection" onSubmit={this.handleSubmit}> 
                <h3 style={{textAlign:'center'}}>Sign In</h3>
                    
                    <div className="form-group">
                        <label>Email</label><br/>
                        <input type="text" className="form-control"  name="email" value={this.state.email} onChange={this.handleChange} />
                    </div><br/>
                    <div className="form-group">
                        <label>Password</label><br/>
                        <input type="password" name="password" className="form-control"  value={this.state.password} onChange={this.handleChange} />
                    </div><br/>

                    <div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div><br/>
                </form>
                </div>
            </div>
        );
    }
}


export default connect(null,{login}) (LoginForms);

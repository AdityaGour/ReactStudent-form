
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

 class UserDetails extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount(){
        alert('userDetails'+ JSON.stringify(this.props.userDeatils));
    }
    render() {
        const {detail } = this.props.location.state;
        const { name, email, userID } = this.props.location.state.detail;
        const { fb } = this.props.location.state;
        console.log('props', this.props.location.state.detail)
        return (
            <div>
                <h2 className="userProfile" >User Profile Card</h2>

                {fb && <div className="card">
                    <img src={detail.picture.data.url} alt="John" className="imageSection" />
                    <h1>{name}</h1>
                    <p className="title">{email}</p>
                    <p>{userID}</p>

                    <p><button></button></p>
                </div>}
                {!fb && <div className="card">
                    <img src={detail.profileObj.imageUrl} alt="John" className="imageSection" />
                    <h1>{detail.profileObj.name}</h1>
                    <p className="title">{detail.profileObj.email}</p>
                    <p>{detail.profileObj.googleId}</p>

                    <p><button></button></p>
                </div>}
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    userDeatils: state.login.userDeatils,
  });
export default connect(mapStateToProps, {})(UserDetails);
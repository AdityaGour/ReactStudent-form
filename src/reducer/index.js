import {combineReducers} from 'redux';
import loginData from '../pages/login/reducer';
import allStudentsData from '../pages/all-students/reducer'

export default combineReducers({
    login:loginData,
    students:allStudentsData
})
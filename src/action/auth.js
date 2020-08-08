import ApiService from '../api';
import {
  LOGIN_IN_USER,
  SET_CURRENT_USER,
  USER_INFO,
  GET_UPLOAD_DATA,
  UPLOAD_DATA,
  ALL_USERS
} from '../constant/type';

export const setCurrentUser = data => dispatch => {
  return dispatch({
    type: SET_CURRENT_USER,
    data,
  });
};

export function singInUser(response) {
  return {type: LOGIN_IN_USER, payload: response};
}


/****Login*******/

export const login = loginData => dispatch => {
  return ApiService.Post('http://localhost:5000/api/auth/login', loginData).then(response => {
    return dispatch({
      type: LOGIN_IN_USER,
      payload: response,
    });
  });
};

/****Register*******/

export const register = registerDate => dispatch => {
  return ApiService.Post('http://localhost:5000/api/auth/register', registerDate).then(response => {
    return dispatch({
      type: LOGIN_IN_USER,
      payload: response,
    });
  });
};
export const allStudentsRecords = registerDate => dispatch => {
  return ApiService.Get('http://localhost:5000/api/allstudents', registerDate).then(response => {
    return dispatch({
      type: ALL_USERS,
      payload: response,
    });
  });
};



/****** Upload Docs API*******/
export const imageUpload = data => dispatch => {
  const formData = new FormData();
  formData.append('image', {
    uri: data.url, //Your Image File Path
    type: data.type,
    name: data.name,
  });
  return ApiService.uploadDocs('http://localhost:5000/api/allstudents', formData).then(response => {
    return dispatch({
      type: UPLOAD_DATA,
      payload: response,
    });
  });
};

/******* Get Uploads********/
export const getUploads = data => dispatch => {
  return ApiService.Get(`/api/file/image/${data}`).then(response => {
    return dispatch({
      type: GET_UPLOAD_DATA,
      payload: response,
    });
  });
};




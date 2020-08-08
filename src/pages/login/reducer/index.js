import {LOGIN_IN_USER, SET_CURRENT_USER} from '../../../constant/type';
let initialState = {
  userDeatils: null,
};

const loginData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN_USER:
      return {
        ...state,
        userDeatils: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        userDeatils: action.payload,
      };
    default:
      return state;
  }
};

export default loginData;

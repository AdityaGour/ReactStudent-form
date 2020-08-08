import {ALL_USERS} from '../../../constant/type';
let initialState = {
  allStudentsDetails: [],
};

const allStudentsData = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        allStudentsDetails: action.payload,
      };
    default:
      return state;
  }
};

export default allStudentsData;

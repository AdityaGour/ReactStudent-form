import {AsyncStorage} from 'react-native';
import {
  GET_TOKEN,
  REMOVE_TOKEN,
  SET_TOKEN,
  REMOVE_FCM_TOKEN,
  GET_FCM_TOKEN,
  SET_FCM_TOKEN,
  GET_DRIVER_STATUS,
  SET_DRIVER_STATUS,
  REMOVE_DRIVER_STATUS,
  GET_APP_INTRO,
  SET_APP_INTRO,
  REMOVE_APP_INTRO,
} from '../constant/type';

export const getToken = token => ({
  type: GET_TOKEN,
  token,
});

export const saveToken = token => ({
  type: SET_TOKEN,
  token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const getUserToken = () => dispatch =>
  AsyncStorage.getItem('token')
    .then(data => {
      dispatch(getToken(data));
    })
    .catch(err => {
      dispatch(console.log(err.message || 'ERROR'));
    });

export const saveUserToken = token => dispatch =>
  AsyncStorage.setItem('token', token)
    .then(data => {
      dispatch(saveToken(token));
    })
    .catch(err => {
      dispatch(console.log(err.message || 'ERROR'));
    });

export const removeUserToken = () => dispatch =>
  AsyncStorage.removeItem('token')
    .then(data => {
      dispatch(removeToken(data));
    })
    .catch(err => {
      dispatch(console.log(err.message || 'ERROR'));
    });

export const getFCMToken = token => ({
  type: GET_FCM_TOKEN,
  token,
});

export const saveFCMToken = token => ({
  type: SET_FCM_TOKEN,
  token,
});

export const removeFCMToken = () => ({
  type: REMOVE_FCM_TOKEN,
});

export const getUserFCMToken = () => dispatch => {
  return AsyncStorage.getItem('fcmToken')
    .then(data => {
      return dispatch(getFCMToken(data));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};

export const saveUserFCMToken = token => dispatch => {
  return AsyncStorage.setItem('fcmToken', token)
    .then(data => {
      return dispatch(saveFCMToken(token));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};

export const removeUserFCMToken = () => dispatch => {
  return AsyncStorage.removeItem('fcmToken')
    .then(data => {
      return dispatch(removeFCMToken(data));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};

/*******Driver Status**********/

export const getStatus = status => ({
  type: GET_DRIVER_STATUS,
  status,
});

export const saveStatus = status => ({
  type: SET_DRIVER_STATUS,
  status,
});

export const removeStatus = () => ({
  type: REMOVE_DRIVER_STATUS,
});

export const getDriverStatus = () => dispatch => {
  return AsyncStorage.getItem('isDriver')
    .then(data => {
      return dispatch(getStatus(data));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};

export const saveDriverStatus = status => dispatch => {
  return AsyncStorage.setItem('isDriver', status)
    .then(data => {
      saveStatus(status);
      return data;
    })
    .catch(err => {
      console.log(err.message || 'ERROR');
      return err;
    });
};

export const removeDriverStatus = () => dispatch => {
  return AsyncStorage.removeItem('isDriver')
    .then(data => {
      return dispatch(removeStatus(data));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};


/******* App Slide Intro *********/
export const getAppIntro = status => ({
  type: GET_APP_INTRO,
  status,
});

export const saveAppIntro = status => ({
  type: SET_APP_INTRO,
  status,
});

export const removeAppIntro = () => ({
  type: REMOVE_APP_INTRO,
});

export const getAppIntroDetails = () => dispatch => {
  return AsyncStorage.getItem('appIntro')
    .then(data => {
      return dispatch(getAppIntro(data));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};

export const saveAppIntroDetails = value => dispatch => {
  console.log('DriiverSratatatat before Save' + value);
  return AsyncStorage.setItem('appIntro', value)
    .then(data => {
      saveAppIntro(value);
      return data;
    })
    .catch(err => {
      console.log(err.message || 'ERROR');
      return err;
    });
};

export const removeAppIntroDetails = () => dispatch => {
  return AsyncStorage.removeItem('appIntro')
    .then(data => {
      return dispatch(removeAppIntro(data));
    })
    .catch(err => {
      return dispatch(console.log(err.message || 'ERROR'));
    });
};

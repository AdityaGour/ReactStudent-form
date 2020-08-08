import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouterComponent from './Router';
import {Provider} from 'react-redux';
import  store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  

 function App() {
  return (
    <Provider store={store}>
    <RouterComponent />
    </Provider>
  );
}

export default App;

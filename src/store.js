import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'

const initialState ={}

const middleWare = [thunk]

const store = createStore(rootReducer ,initialState, applyMiddleware(...middleWare));


export default store
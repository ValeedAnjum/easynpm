import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import {reducer as formReducer} from 'redux-form';
import { UserReducers } from './UserReducer';
import {ModelReducer} from './ModelReducer';
export const Reducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    userReducers:UserReducers,
    model:ModelReducer,
    form:formReducer
});
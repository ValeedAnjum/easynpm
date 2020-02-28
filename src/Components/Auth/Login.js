import React from 'react';
import {Redirect} from 'react-router-dom';
import {combineValidators,isRequired} from 'revalidate';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import Textinput from '../Comman/TextInput/TextInput';
import {Signin as signin} from '../../Store/Actions/UserActions';
const validate = combineValidators({
    email:isRequired({message:'PLEASE ENTER A VALID EMAIL ADDRESS'}),
    password:isRequired({message:'PLEASE ENTER A PASSWORD'})
})

const Login = (props) => {
    const submitVal = val => {
        props.Signin(val);
    }
    if(props.auth){
        return <Redirect to="/" />
    }
    return (
        <div className="bg-primary Login">
            <div className="s008">
            <form onSubmit={props.handleSubmit(submitVal)}>
                <div className="inner-form">
                    <div className="basic-search">
                        <div className="input-field">
                            <Field name="email" component={Textinput} placeholder="EMAIL" type="email" />
                            <div className="icon-wrap">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="input-field">
                            <Field name="password" component={Textinput} placeholder="PASSWORD" type="password" />
                            <div className="icon-wrap">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnCon">
                <Button color="primary" type="submit">Login</Button>
                </div>
            </form>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        Signin:cred => dispatch(signin(cred))
    }
}
const mapState = state => {
    return {
        auth:state.firebase.auth.uid
    }
}
export default connect(mapState,mapDispatch)(reduxForm({form:'RegisterForm',validate})((Login)));

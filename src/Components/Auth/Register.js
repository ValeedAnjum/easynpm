import React from 'react';
import {combineValidators,isRequired} from 'revalidate';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import Textinput from '../Comman/TextInput/TextInput';
import {Register as register} from '../../Store/Actions/UserActions';
import { Redirect } from 'react-router-dom';
const validate = combineValidators({
    name:isRequired({message:'PLEASE ENTER NAME'}),
    email:isRequired({message:'PLEASE ENTER A VALID EMAIL ADDRESS'}),
    password:isRequired({message:'PLEASE ENTER A PASSWORD'})
})

const Register = (props) => {
    const submitVal = val => {
        props.Register(val);
    }
    if(props.auth){
        return <Redirect to="/" />
    }
    return (
        <div className="bg-primary Register">
            <div className="s008">
            <form onSubmit={props.handleSubmit(submitVal)}>
                <div className="inner-form">
                    <div className="basic-search">
                        <div className="input-field">
                            {/* <input id="search" type="text" placeholder="NAME" autoComplete="off"/> */}
                            <Field name="name" component={Textinput} placeholder="NAME" type="text" />
                            <div className="icon-wrap">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
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
                <Button color="primary" type="submit">Register</Button>
                </div>
            </form>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        Register:cred => dispatch(register(cred))
    }
}
const mapState = state => {
    return {
        auth:state.firebase.auth.uid
    }
}
export default connect(mapState,mapDispatch)(reduxForm({form:'RegisterForm',validate})((Register)));

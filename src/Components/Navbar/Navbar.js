import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import { Logout } from '../../Store/Actions/UserActions';
const Navbar = ({auth,logout}) => {
    const Logout = e => {
        e.preventDefault();
        logout();
    }
    return (
        <Fragment>
            <nav
                className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
                style={{position:'relative'}}
                id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top">Easy Npm</Link>
                    <button
                        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {
                                auth ? <React.Fragment>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <Link to="/favourties"
                                        className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#portfolio">Favourites</Link>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            onClick={Logout}
                                            className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="#portfolio">Logout</a>
                                    </li>
                                </React.Fragment>:
                                <React.Fragment>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link to="/login"
                                        className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#portfolio">Login</Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link to="/register"
                                        className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#portfolio">Sign Up</Link>
                                </li>
                            </React.Fragment>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

const mapState = state => {
    return {
        auth:state.firebase.auth.uid
    }
}
const mapDispatch = dispatch => {
    return {
        logout:() => dispatch(Logout())
    }
}
export default connect(mapState,mapDispatch)(Navbar);

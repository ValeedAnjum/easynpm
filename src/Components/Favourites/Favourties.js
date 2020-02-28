import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import Commands from '../Commands/Commands';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Button } from '@material-ui/core';
import { addNewList } from '../../Store/Actions/ModelActions';
import { deleteList } from '../../Store/Actions/UserActions';
class Favouties extends Component {
    state = {
        listItems:['React','Thatha']
    }
    render() {
        const {Lists,AddNewList,DeleteList,auth} = this.props;
        if(!auth) return <Redirect to="/" />
        return (
            <React.Fragment>
                <header className=" bg-primary Favouties">
                    <div className="s008">
                        {
                            Lists && Lists.map(obj => {
                                return <Commands key={obj.id} idOfList={obj.id} DeleteList={DeleteList} commands={obj.list} favourties/>
                            })
                        }
                    <div className="btnCon">
                    <Button color="primary" onClick={AddNewList}>Make A List</Button>
                    </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

const mapState = state => {
    return {
        Lists:state.firestore.ordered.favourties,
        auth:state.firebase.auth.uid
    }
}
const mapDispatch = dispatch => {
    return {
        AddNewList:() => dispatch(addNewList()),
        DeleteList:listId => dispatch(deleteList(listId))
    }
}
export default compose(
    connect(mapState,mapDispatch),
    firestoreConnect(props => {
        if(!props.auth) return [];
        console.log(props.auth);
        return (
            [{
            collection: "favourties",
            where:['userid','==',props.auth]
            }]
          )
    })
    
)(Favouties);
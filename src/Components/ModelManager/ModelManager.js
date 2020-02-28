import React from 'react'
import MakeNewList from '../Favourites/MakeNewList/MakeNewList';

import {connect} from 'react-redux';
import MainLoadingScreen from '../Comman/LoadingScreens/MainLoadingScreen';
const ModelManager = ({ModelManagerState}) => {
    switch(ModelManagerState){
        case 'MakeNewListShow':
            return <MakeNewList/>
        case 'MakeNewListClose':
            return null;
        case 'MainLoadingScreen':
            return <MainLoadingScreen />
        default:
            return null;
    }
}

const mapState = state => {
    return {
        ModelManagerState:state.model.ModelName
        
    }
}

export default connect(mapState)(ModelManager);

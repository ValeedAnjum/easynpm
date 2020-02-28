import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetctPackages } from '../../Store/Actions/AlgoliaSearchActions';

class Algolia extends Component {
    componentDidMount(){
        this.props.FetchPackages(null);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapDispatch = dispatch => {
    return {
        FetchPackages:query => dispatch(fetctPackages(query))
    }
}
export default  connect(null,mapDispatch)(Algolia);
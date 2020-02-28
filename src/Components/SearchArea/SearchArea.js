import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetctPackages} from '../../Store/Actions/UserActions';
import ListOfCmds from '../List/List';

class SearchArea extends Component {
    onkeyDown = async e => {
        let query = e.target.value;
        await this.props.Search(query);
        this.setState({loadedItems:this.props.LoadedItems});
    }
    render() {
        const {Loading} = this.props;
        return (
            <React.Fragment>
                <header className=" bg-primary">
                    <div className="s008">
                        <form>
                            <div className="inner-form">
                                <div className="basic-search">
                                    <div className="input-field">
                                        <input id="search" type="text" onChange={this.onkeyDown} placeholder="Type Keywords" autoComplete="off"/>
                                        <div className="icon-wrap">
                                            {
                                                Loading ? <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>:
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <ListOfCmds/>
                            </div>
                        </form>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
const mapState = state => {
    return {
        Loading:state.userReducers.Loading
    }
}
const mapDispatch = dispatch => {
    return {
        Search:query => dispatch(fetctPackages(query))
    }
}
export default connect(mapState,mapDispatch)(SearchArea);
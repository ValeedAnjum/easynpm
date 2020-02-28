import React,{Component} from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Commands from '../Commands/Commands';

class ListOfCmds extends Component {
    state = {
        checkedPackages:[]
    }
    handleToggle = value => {
        const copyOfCheckedPackages = [...this.state.checkedPackages]
        const currentIndex = copyOfCheckedPackages.indexOf(value);
        if(currentIndex === -1){
            copyOfCheckedPackages.push(value);
        }else{
            copyOfCheckedPackages.splice(currentIndex,1);
        }
        this.setState({
            checkedPackages:copyOfCheckedPackages
        })
    }
    
    render() {
        return (
        <React.Fragment>
            <List dense className="List">
                {
                    this.props.LoadedPackages.map(value => {
                    const labelId = `checkbox-list-secondary-label-${value.name}`;
                    return (
                        <ListItem key={value.name} button>
                            <ListItemText id={value.name} primary={` ${value.name}`}/>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={() => this.handleToggle(value.name)}
                                    checked={this.state.checkedPackages.indexOf(value.name) !== -1}
                                    inputProps={{
                                    'aria-labelledby': labelId
                                }}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            {/* <List dense className="List">
                {
                    this.state.packages.map(value => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem key={value} button>
                            <ListItemText id={labelId} primary={` ${value}`}/>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={() => this.handleToggle(value)}
                                    checked={this.state.checkedPackages.indexOf(value) !== -1}
                                    inputProps={{
                                    'aria-labelledby': labelId
                                }}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List> */}
            <Commands commands={this.state.checkedPackages}/>
        </React.Fragment>

        )
    }
}
const mapState = state => {
    return {
        LoadedPackages:state.userReducers.LoadedItems
    }
}
export default connect(mapState)(ListOfCmds);
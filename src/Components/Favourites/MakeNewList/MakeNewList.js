import React,{useState} from 'react'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import {connect} from 'react-redux';
import { saveList } from '../../../Store/Actions/UserActions';
const MakeNewList = ({save,closeNewList,Saving}) => {
    const [value,setValue] = useState("");
    const [err,setErr] = useState(null);
    const [placeHolder,setPlaceHolder] = useState("Please Follow The Given Form React,Reduc,Firebase");
    const HandlingValue = () => {
        let value = document.getElementById('listValues').value;
        setValue(value);
        setErr(null);
        setPlaceHolder("Please Follow The Given Form React,Reduc,Firebase");
    }
    const saveList = () => {
        if(value.indexOf(" ") >= 0){
            console.log('w');
            setErr("Spaces are not allowed");
            return;
        }
        if(value === ""){
            setPlaceHolder("Please Enter Value...");
            return;
        }
        const list = value.split(",");
        if(Array.isArray(list)){
            save(list);
        }
    }
    return (
        <React.Fragment>
            <div className="MakeNewList backside" onClick={closeNewList}>
            </div>
            <div className="contentNewList">
            <form  noValidate autoComplete="off" >
              <TextField onChange={HandlingValue} value={value} id="listValues" label={placeHolder} fullWidth/>
            </form>
            <div className="btnCon">
                {
                    Saving ? <CircularProgress />:<Button color="primary" variant="contained" onClick={saveList}>Save</Button>
                }
            </div>
            <div>
                {
                    err ? <h1>{err}</h1>:null
                }
            </div>
            </div>
        </React.Fragment>
    )
}

const mapState = state => {
    return {
        Saving:state.model.SavingList
    }
}
const mapDispatch = dispatch => {
    return {
        save:List => dispatch(saveList(List)),
        closeNewList:() => dispatch({type:'MakeNewListClose'})
    }
}
export default connect(mapState,mapDispatch)(MakeNewList);

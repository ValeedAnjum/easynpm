const intState = {
    LoadedItems:[
        {name:'react'},{name:'redux'},{name:'react-redux'},
        {name:'firestore'},{name:'react-redux-firebase'},{name:'firebase'},
        {name:'material-ui'},{name:'react-router'},{name:'notify'}],
    Loading:false
}

export const UserReducers = (state = intState,action) => {
    switch(action.type){
        case 'LoadItemsStart':
            return {...state,Loading:true}
        case 'LoadItemsSuccess':
            return {...state,LoadedItems:action.payload,Loading:false}
        case 'LoadItemsError':
            return {...state,Loading:false}
        default:
            return state;
    }
}
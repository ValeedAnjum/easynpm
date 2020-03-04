const intState = {
    ModelName:null,
    SavingList:false,
    SaveListError:null
}

export const ModelReducer = (state = intState,action) => {
    switch(action.type){
        case 'MakeNewListShow':
            return {...state,ModelName:'MakeNewListShow'};
        case 'MakeNewListClose':
            return {...state,ModelName:null};
        case 'SaveListAsynStart':
            return {...state,SavingList:true}
        case 'SaveListAsynSuccess':
            return {...state,SavingList:false,ModelName:null}
        case 'SaveListAsynError':
            return {...state,SaveListError:action.payload,ModelName:null,SavingList:false}
        case 'AsynStart':
            return {...state,ModelName:'MainLoadingScreen'}
        case 'AsynSuccess':
            return {...state,ModelName:null}
        case 'AsynError':
            return {...state,ModelName:null}
        default:
            return state;
    }
}
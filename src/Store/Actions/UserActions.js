import algoliasearch from 'algoliasearch/lite';
import Ofirebase from '../../Config/config';
import {APP_ID,SEARCH_API_KEY} from '../../Config/config';
export const fetctPackages = que => async (dispatch,getState) => {
    dispatch({type:'LoadItemsStart'});
    let searchClient = algoliasearch(APP_ID,SEARCH_API_KEY);
    let index = searchClient.initIndex('packages');
    await index.search(que,{
        hitsPerPage: 10
        }).then(res => {
        dispatch({type:'LoadItemsSuccess',payload:res.hits})
    }).catch(err => {
        dispatch({type:'LoadItemsError'});
    });
}

export const saveList = List => {
    return (dispatch,getState,{getFirestore,getFirebase}) => {
        dispatch({type:'SaveListAsynStart'});
        const firestore = getFirestore();
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        firestore.collection('favourties').add({
            list:List,
            userid:user.uid
        }).then(() => {
            dispatch({type:'SaveListAsynSuccess'});
        }).catch(err => {
            dispatch({type:'SaveListAsynError',payload:err.message});
        })
    }
}

export const deleteList = id => {
    return (dispathch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Favourties').doc(id).delete().then(() => {
            console.log("Success");
        }).catch(err => {
            alert(err.message);
        })
    }
}

export const Register = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const {email,password,name} = cred;
        const firebase = getFirebase();
        const firestore = getFirestore();
        dispatch({type:'AsynStart'});
        firebase.auth().createUserWithEmailAndPassword(
            email,password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                email:email,
                name:name
            }).then(() => {
                return firestore.collection('favourties').add({
                    list:['react','redux','firebase','react-redux','react-redux-firebase','react-router',
                        'react-router-dom','firestore','redux-form'],
                        userid:res.user.uid
                }).then(() => {
                    dispatch({type:'AsynSuccess'});
                }).catch(err => {
                    dispatch({type:'AsynError'});
                    alert(err.message);
                })
            }).catch(err => {
                dispatch({type:'AsynError'});
                alert(err.message);
            })
        }).catch(err => {
            alert(err.message);
            dispatch({type:'AsynError'});
        })
    }
}

export const Signin = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const {email,password} = cred;
        const firebase = getFirebase();
        dispatch({type:'AsynStart'});
        firebase.auth().signInWithEmailAndPassword(
            email,password
        ).then(() => {
            dispatch({type:'AsynSuccess'});
        }).catch(err => {
            dispatch({type:'AsynError'});
            alert(err.message);
        })
    }
}

export const Logout = () => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        dispatch({type:'AsynStart'});
        firebase.auth().signOut().then(() => {
            dispatch({type:'AsynSuccess'});
        }).catch(err => {
            dispatch({type:'AsynError'});
            alert(err.message);
        })
    }
}
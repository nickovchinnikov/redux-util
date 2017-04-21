# redux-util

````
npm install redux-util
````
Or
````
yarn add redux-util
````

This library is easy way to work with Redux.

Let's see the some examples

### 1. Create action

````ecmascript 6
import {buildActionCreator} from 'redux-util'

const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';

//Build actionCreator with param 'users' 
const getUserInfoRequestActionCreator = buildActionCreator(GET_USER_DATA_SUCCESS, 'users');

const getUserInfoAction = () => (dispatch: Dispatch) => {
    return api.fetchUsers().then(
        response => {
            dispatch(
                //Create action with param
                getUserInfoSuccessActionCreator(response)
            )
        }
    );
};

export default getUserInfoAction;

````

### 2. prefixed actions

````ecmascript 6
import {buildActionCreator, genericActionType} from 'redux-util'

const PREFIX = 'USER';
const LOAD_DATA = genericActionType(PREFIX, 'LOAD_DATA');

const loadUserDataAction = buildActionCreator(LOAD_DATA, 'data');

export const loadUser = () => (dispatch: Dispatch) => {
    return api.fetchUser().then(
        response => {
            dispatch(
                loadUserDataAction(response)
            )
        }
    );
};
````

### 3. generic action creator
````ecmascript 6
import {buildGenericActionCreator} from 'redux-util'

const START_LOADING = 'START_LOADING';
const END_LOADING = 'END_LOADING';

export const startLoadingActionCreator = buildGenericActionCreator(START_LOADING);
export const endLoadingActionCreator = buildGenericActionCreator(END_LOADING);

// ....

import {startLoadingActionCreator, endLoadingActionCreator} from 'loading-reducer'

const PREFIX = 'PREFIX';
const startLoading = startLoadingActionCreator(PREFIX);
const endLoading = endLoadingActionCreator(PREFIX);
export const loadUser = () => (dispatch: Dispatch) => {
    dispatch(startLoading());
    return api.fetchUser().then(
        response => {
            dispatch(
                loadUserDataAction(response)
            );
            dispatch(endLoading());
        }
    );
};
````

### 4. Create reducer
````ecmascript 6
import {Reducer} from 'redux-util'
import {UserState} from 'types/UserState'

import {
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL
} from 'services/actionTypes'

const initialState: UserState = [];

export default Reducer(initialState, {
    [GET_USER_DATA_REQUEST]: () => null,
    [GET_USER_DATA_SUCCESS]: (state, action) => ({
        ...state,
        data: action.users
    }),
    [GET_USER_DATA_FAIL]: (state, action) => ({
        ...state,
        error: action.error
    })
});
````

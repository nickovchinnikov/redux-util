# redux-util

This library is easy way to work with Redux.

Let's see the some examples

### 1. Create action

````ecmascript 6
import buildActionCreator from 'redux-util'

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

### 2. Create reducer
````ecmascript 6
import Reducer from 'redux-util'
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

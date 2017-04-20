/**
 * @flow
 *
 * Create the reducers function without switch
 *
 * Example:
 *
 * const counterReducer = Reducer(0, {
 *   increment: (state, action) => state + 1,
 *   decrement: (state, action) => state - 1
 * });
 *
 * @param initialState {any} - reducer initial state
 * @param {Object} reducersObj - reducers object with {key: handlerFunction (state, action) => ()}
 * @returns {Function}
 * @constructor
 */
export function Reducer (initialState: any, reducersObj: Object) {
    return function (state: any = initialState, action: Object) {
        if (action && reducersObj.hasOwnProperty(action.type)) {
            return reducersObj[action.type](state, action)
        }
        return state;
    };
}

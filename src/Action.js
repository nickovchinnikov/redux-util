// @flow

import zipObj from 'ramda/src/zipObj'
import ifElse from 'ramda/src/ifElse'
import compose from 'ramda/src/compose'
import isEmpty from 'ramda/src/isEmpty'
import nthArg from 'ramda/src/nthArg'

import type {Action} from './types/Action'

export const actionBuilder = (compose: Function, generic: boolean = false) => {
    return (type: string, ...argNames: Array<string>) => {
        const waitValues = (type: string) => {
            return (...values: Array<any>) => compose({type}, zipObj(argNames, values))
        };
        if(generic) {
            return (genericType: string) => {
                return waitValues(genericActionType(genericType, type))
            }
        }  else {
            return waitValues(type)
        }
    }
};

const composeAction = (action: Action, payload: Object) => ({
    ...action,
    ...payload
});

/**
 * Standard redux action
 * @param type
 * @param argNames
 * @returns {Function} action creator
 */
export const actionCreator = actionBuilder(composeAction);

/**
 * Generates generic action by base action type and genericParam.
 * This method should be used for all generic functionality: reducers (switch), action creators (components, sagas)
 *
 * @param genericType generic param
 * @param actionType base action type
 */
export const genericActionType = ifElse(
    compose(isEmpty, nthArg(0)),
    nthArg(1),
    (genericType: string, actionType: string) => `${genericType}_${actionType}`
);

/**
 * Generates action creator which waits for the generic action type
 *
 * @param type
 * @param argNames
 */
export const genericActionCreator = actionBuilder(composeAction, true);
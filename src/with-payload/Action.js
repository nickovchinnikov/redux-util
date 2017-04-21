// @flow

import {actionBuilder} from '../index'
import type {Action} from '../types/Action'

const composeAction = (action: Action, payload: Object) => ({
    ...action,
    payload
});


/**
 * Standard redux action
 * @param type
 * @param argNames
 * @returns {Function} action creator
 */
export const actionCreator = actionBuilder(composeAction);

/**
 * Generates action creator which waits for the generic action type
 *
 * @param type
 * @param argNames
 */
export const genericActionCreator = actionBuilder(composeAction, true);

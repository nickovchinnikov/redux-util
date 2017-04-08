// @flow
import R from 'ramda';

/**
 * Standart redux action
 * @param type
 * @param argNames
 * @returns {Function} action creator
 */
export const actionCreator = (type: string, ...argNames: Array<string>) =>
    (...args: Array<string>) => {
        const combinedParams = R.zipObj(
            argNames,
            args
        );
        return {
            type,
            ...combinedParams
        };
    };

/**
 * Create generic action
 * @param type
 * @param argNames
 * @returns {Function} function $actionCreator(genericType)(...args)
 */
export const actionCreatorGeneric = (type: string, ...argNames: Array<string>) =>
    (genericType: string) =>
        (...args: Array<string>) => {
            let action = {
                type: `${type}_:${genericType}`
            };
            const combinedParams = R.zipObj(
                argNames,
                args
            );
            return {
                action,
                ...combinedParams
            };
        };

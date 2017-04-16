// @flow
import R from 'ramda';

/**
 * Standart redux action
 * @param type
 * @param argNames
 * @returns {Function} action creator
 */
export const buildActionCreator = (type: string, ...argNames: Array<string>) =>
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

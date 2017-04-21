import {
    actionCreator,
    genericActionType,
    genericActionCreator
} from '../../src/with-payload/index';

describe('action creator', () => {
    it('with one param', () => {
        const type = 'action type';
        const param = 'param';
        const creator = actionCreator(type, param);
        expect(creator(1)).toEqual({
            type,
            payload: {
                [param]: 1
            }
        })
    });

    it('with 2 params', () => {
        const type = 'action type';
        const params = ['param1', 'param2'];
        const creator = actionCreator(type, ...params);
        expect(creator(1, 2)).toEqual({
            type,
            payload: {
                [params[0]]: 1,
                [params[1]]: 2
            }
        })
    })
});

describe('generic action creator', () => {
    it('should create generic action', () => {
        const type = 'type';
        const prefix = 'prefix';
        const genericAction = genericActionCreator(type, 'param');
        const prefixedAction = genericAction(prefix);
        expect(prefixedAction(1)).toEqual({
            type: genericActionType(prefix, type),
            payload: {
                param: 1
            }
        })
    })
});
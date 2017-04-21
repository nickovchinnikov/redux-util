import {actionCreator, genericActionType, genericActionCreator} from '../src/index';

const actionNameWithOneParam = 'testActionWithOneParameter';
const paramName = 'testParam';

const actionInstance = actionCreator(actionNameWithOneParam, paramName);

describe('actionCreator with one param', () => {
    test('actionCreator equals function', () => {
        expect(
            actionInstance
        ).toBeInstanceOf(
            Function
        );
    });
    test('should equal type and param', () => {
        const param = 1;

        const actionResult = {
            type: expect.any(String),
            [paramName]: expect.any(Number)
        };

        expect(
            actionInstance(param)
        ).toEqual(
            expect.objectContaining(actionResult)
        );
    });
});

const actionNameWithTwoParams = 'testActionWithTwoParams';
const paramName2 = 'testParams2';

const actionInstance2 = actionCreator(actionNameWithTwoParams, paramName, paramName2);

describe('actionCreator with two params', () => {
    test('actionCreator with two params equals function', () => {
        expect(
            actionInstance
        ).toBeInstanceOf(
            Function
        );
    });
    const param = 1;
    const param2 = 2;
    test('should equal type and params', () => {
        const actionResult = {
            type: expect.any(String),
            [paramName]: expect.any(Number),
            [paramName2]: expect.any(Number),
        };

        expect(
            actionInstance2(param, param2)
        ).toEqual(
            expect.objectContaining(actionResult)
        );
    });
});

describe('genericActionType', () => {
    it('should create prefixed action type',  () => {
        const prefixedActionType = genericActionType('prefix', 'type');
        expect(prefixedActionType).toEqual('prefix_type')
    });

    it('should create non-prefixed action type', () => {
        const actionType = genericActionType('', 'type');
        expect(actionType).toEqual('type')
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
            param: 1
        })
    })
});

const Reducer = require('../src/Reducer').default;
const buildActionCreator = require('../src/Action').buildActionCreator;

const stateParamName = 'data';

const stateData = 2;

const initialState = {
    [stateParamName]: 1
};

const stateForAction2 = {
    [stateParamName]: stateData
};

const actionName1 = 'action1';
const actionName2 = 'action2';

const action1 = buildActionCreator(actionName1);
const action2 = buildActionCreator(actionName2, stateParamName);

const reducerInstance = Reducer(initialState, {
    [actionName1]: () => null,
    [actionName2]: (state, action) => ({
        ...state,
        data: action.data
    })
});

describe(`Reducer(initialState, {
    ${actionName1}: () => null,
    ${actionName2}: (state, action) => ({
        ...state,
        ${stateParamName}: action.${stateParamName}
    })
}) coverage`, () => {
    test(`reducerInstance equals function`, () => {
        expect(
            reducerInstance
        ).toBeInstanceOf(
            Function
        );
    });
    test(`reducerInstance run ${actionName1} equals null`, () => {
        expect(
            reducerInstance(stateForAction2, action1())
        ).toEqual(
            null
        );
    });
    test(`reducerInstance run ${actionName2} equals {
        ...state,
        ${stateParamName}: action.${stateParamName}
    }`,
    () => {
        expect(
            reducerInstance(stateForAction2, action2(stateData))
        ).toEqual(
            expect.objectContaining({
                [stateParamName]: stateData
            })
        );
    });
});

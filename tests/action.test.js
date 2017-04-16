const buildActionCreator = require('../src/Action').buildActionCreator;

const actionNameWithOneParam = "testActionWithOneParameter";
const paramName = "testParam";

const actionInstance = buildActionCreator(actionNameWithOneParam, paramName);

describe(`buildActionCreator("${actionNameWithOneParam}", "${paramName}") coverage`, () => {
    test(`buildActionCreator equals function`, () => {
        expect(
            actionInstance
        ).toBeInstanceOf(
            Function
        );
    });
    test(`actionInstance(1) equals {type: "${actionNameWithOneParam}", ${paramName}: 1}`, () => {
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

const actionNameWithTwoParams = "testActionWithTwoParams";
const paramName2 = "testParams2";

const actionInstance2 = buildActionCreator(actionNameWithTwoParams, paramName, paramName2);

describe(`buildActionCreator("${actionNameWithTwoParams}", "${paramName}", "${paramName2}") coverage`, () => {
    test(`buildActionCreator with two params equals function`, () => {
        expect(
            actionInstance
        ).toBeInstanceOf(
            Function
        );
    });
    test(`actionInstance2(1, 2) equals {type: "${actionNameWithOneParam}", ${paramName}: 1, ${paramName2}: 2}`, () => {
        const param = 1;
        const param2 = 2;

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

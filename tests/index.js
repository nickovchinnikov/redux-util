import * as common from '../src'
import * as withPayload from '../src/with-payload'

describe('namespace exports', () => {
    it('should both export equal api', () => {
        expect(common.Reducer).toEqual(withPayload.Reducer);
        expect(common.genericActionType).toEqual(withPayload.genericActionType);

        expect(common.buildActionCreator).toBeInstanceOf(Function);
        expect(withPayload.buildActionCreator).toBeInstanceOf(Function);

        expect(common.actionCreator).toBeInstanceOf(Function);
        expect(withPayload.actionCreator).toBeInstanceOf(Function);

        expect(common.genericActionCreator).toBeInstanceOf(Function);
        expect(withPayload.genericActionCreator).toBeInstanceOf(Function);

        expect(common.buildGenericActionCreator).toBeInstanceOf(Function);
        expect(withPayload.buildGenericActionCreator).toBeInstanceOf(Function);
    })
});
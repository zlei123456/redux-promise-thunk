import { handleActions, Action } from 'redux-actions';
import { testAction } from '../actions/testAction';

const initState = {
    num: 0
}

export const testKey = 'test';
export const testReducer = handleActions<any, any> ({
    [testAction]: (state: any, action: Action<any>)
        : any => {
            let st = {...state}
            st.num = action.payload.result;
            return st
        }
}, initState);
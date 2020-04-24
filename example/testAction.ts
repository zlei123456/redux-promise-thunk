import { createAction } from 'redux-actions';

export const testAction = createAction('test', async (num: any) => {
  return (dispatch: any, getState: any) => {
    let result = num;
    return {result};
  }
});
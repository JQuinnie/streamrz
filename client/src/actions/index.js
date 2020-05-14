// action creators
import { SIGN_IN, SIGN_OUT } from './types';
// axios instance to make requests over to API
import streams from '../apis/streams';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// handle axios creation
export const createStream = (formValues) => async (dispatch) => {
  streams.post('/streams', formValues);
};

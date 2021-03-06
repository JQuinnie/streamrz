// axios instance to make requests over to API
import streams from '../apis/streams';
import history from '../history';

// action creators
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';

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
// getState function allows us to pull out data from Redux Store
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  // dispatching actionos after stream creation
  dispatch({ type: CREATE_STREAM, payload: response.data });

  // Programmatic navigation to get user back to the root route after successful response
  history.push('/');
};

// arrow function that returrns a Thunk function
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  // do not need a response as it will be empty
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};

export const editStream = (id, formValues) => async (dispatch) => {
  // PUT requests will overwrite upon updates, replace ALL properties with what was supplied to PUT
  // PATCH requests will update ONLY the properties that was supplied to PATCH
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

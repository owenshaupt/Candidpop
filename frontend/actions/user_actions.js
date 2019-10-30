import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER = 'CLEAR_USER';

const recieveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = id => dispatch => APIUtil.fetchUser(id)
  .then(user => dispatch(recieveUser(user)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const clearUser = () => {
  return {
    type: CLEAR_USER
  };
};
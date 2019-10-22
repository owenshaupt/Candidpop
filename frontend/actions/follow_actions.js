import * as APIUtil from '../util/follow_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const recieveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
})

export const receiveErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const createFollow = follow => dispatch => APIUtil.createFollow(follow)
  .then(item => dispatch(recieveFollow(follow)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const deleteFollow = follow => dispatch => APIUtil.deleteFollow(follow)
  .then(() => dispatch(removeFollow(follow)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));
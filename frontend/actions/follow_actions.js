import * as APIUtil from '../util/follow_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_LIST_ITEM_FOLLOW = 'RECEIVE_LIST_ITEM_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';
export const CLEAR_FOLLOW_ERRORS = 'CLEAR_FOLLOW_ERRORS';

const recieveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

const recieveListItemFollow = follow => ({
  type: RECEIVE_LIST_ITEM_FOLLOW,
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

export const clearFollowErrors = () => ({
  type: CLEAR_FOLLOW_ERRORS
});

export const fetchFollow = follow => dispatch => APIUtil.fetchFollow(follow)
  .then(follow => dispatch(recieveFollow(follow)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const fetchListItemFollow = follow => dispatch => APIUtil.fetchFollow(follow)
  .then(follow => dispatch(recieveListItemFollow(follow)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const createFollow = follow => dispatch => APIUtil.createFollow(follow)
  .then(follow => dispatch(recieveFollow(follow)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const deleteFollow = follow => dispatch => APIUtil.deleteFollow(follow)
  .then(follow => dispatch(removeFollow(follow)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));
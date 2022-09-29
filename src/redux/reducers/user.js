import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_INFO:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default user;

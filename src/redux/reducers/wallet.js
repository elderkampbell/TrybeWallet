import { WALLET_INFO } from '../actions';

const INITIAL_STATE = {
  currency: 'BRL',
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default wallet;

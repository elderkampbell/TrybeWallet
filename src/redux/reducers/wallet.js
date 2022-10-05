import { WALLET_INFO, FETCH_CURRENCIES, FETCH_EXCHANGE } from '../actions';

const INITIAL_STATE = {
  currency: 'BRL',
  total: 0,
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      ...action.payload,
    };
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case FETCH_EXCHANGE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload],
    };
  default:
    return state;
  }
}

export default wallet;

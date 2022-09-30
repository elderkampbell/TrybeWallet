export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const getLoginAction = (payload) => ({
  type: USER_INFO,
  payload,
});

export const getWalletAction = (payload) => ({
  type: WALLET_INFO,
  payload,
});

const responseApi = (payload) => ({
  type: FETCH_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const data = Object.keys(result).filter((e) => e !== 'USDT');
    console.log(data);
    dispatch(responseApi(data));
  } catch (e) {
    throw new Error(e);
  }
};

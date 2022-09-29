export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const getLoginAction = (payload) => ({
  type: USER_INFO,
  payload,
});

export const getWalletAction = (payload) => ({
  type: WALLET_INFO,
  payload,
});

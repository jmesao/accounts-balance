import axios from 'axios';
import { BASE_SERVER_URL } from '../constants';

const ACCOUNTS_URL = '/accounts';

export function getAccounts() {
  const url = BASE_SERVER_URL + ACCOUNTS_URL;
  return axios.get(url);
}

export function getAccountDetailsById(accountId) {
  const url = `${BASE_SERVER_URL}${ACCOUNTS_URL}/${encodeURIComponent(accountId)}`;
  return axios.get(url);
}

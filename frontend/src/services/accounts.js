import axios from 'axios';
import { BASE_SERVER_URL } from '../constants';

export function getAccounts() {
  const url = `${BASE_SERVER_URL}/accounts`;
  return axios.get(url);
}

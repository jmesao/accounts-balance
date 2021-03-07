import axios from 'axios';
import { BASE_SERVER_URL } from '../constants';

export function getRate() {
  const url = `${BASE_SERVER_URL}/rate`;
  return axios.get(url);
}

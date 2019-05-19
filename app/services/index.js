import axios from 'axios';
import { DEFAULT_OPTS, API_URL } from '../constants';

const setHeader = opts => ({ ...DEFAULT_OPTS, ...opts });

export const GET = params => {
  const { path, opts = {}, body = {} } = params;

  return axios({
    method: 'get',
    headers: setHeader(opts),
    params: body,
    url: API_URL + path,
  });
};

export const PUT = params => {
  const { path, body = {}, opts = {} } = params;

  return axios({
    method: 'put',
    headers: setHeader(opts),
    data: body,
    url: API_URL + path,
  });
};

export const POST = params => {
  const { path, body = {}, opts = {} } = params;

  return axios({
    method: 'post',
    headers: setHeader(opts),
    data: body,
    url: API_URL + path,
  });
};

export const DEL = params => {
  const { path, opts = {} } = params;

  return axios({
    method: 'get',
    headers: setHeader(opts),
    url: API_URL + path,
  });
};

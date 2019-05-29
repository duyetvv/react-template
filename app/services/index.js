/* eslint-disable import/named */
import axios from 'axios';

import { baseURL } from 'settings';

// constants
const defOpts = { 'Content-Type': 'application/json; charset=utf-8' };

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'mzkzkxcjzxclvakjhkshr',
};

export const setStorage = ({ key, val }) => {
  window.localStorage.setItem(key, val);
};

export const getStorage = key => window.localStorage.getItem(key) || '';

export const removeStorage = key => {
  window.localStorage.removeItem(key);
};

export const setHeader = isAuth => {
  const token = getStorage(STORAGE_KEYS.ACCESS_TOKEN);
  const tmpOpts = isAuth ? { Authorization: `Bearer ${token}` } : {};

  return { ...defOpts, ...tmpOpts };
};

export const apiGet = params => {
  const { path, body = {}, isAuth = false } = params;
  const url = baseURL + path;

  return axios({
    method: 'get',
    headers: setHeader(isAuth),
    params: body,
    url,
  });
};

export const apiPut = params => {
  const { path, body = {}, isAuth = false } = params;
  const url = baseURL + path;

  return axios({
    method: 'put',
    headers: setHeader(isAuth),
    data: body,
    url,
  });
};

export const apiPost = params => {
  const { path, body = {}, isAuth = false } = params;
  const url = baseURL + path;

  return axios({
    method: 'post',
    headers: setHeader(isAuth),
    data: body,
    url,
  });
};

export const apiDel = params => {
  const { path, isAuth = false } = params;

  return axios({
    method: 'delete',
    headers: setHeader(isAuth),
    url: baseURL + path,
  });
};

export const download = params => {
  const { url } = params;

  return axios({
    method: 'get',
    responseType: 'blob',
    url,
  });
};

import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '14c1ea606f1a49ebb761cb3b7e18b72f',
  },
};

export default axios.create(config);

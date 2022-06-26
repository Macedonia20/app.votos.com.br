import axios from 'axios';
import axiosRetry from 'axios-retry';
const url =
  process.env.NODE_ENV === 'development'
    // ? 'https://6tjh57at9i.execute-api.sa-east-1.amazonaws.com/prod'
    // : 'https://6tjh57at9i.execute-api.sa-east-1.amazonaws.com/prod';
    ? 'http://localhost:1212'
    : 'https://ycmjgilv20.execute-api.sa-east-1.amazonaws.com/PROD';

const api = axios.create({ baseURL: url });
const shouldRetry = error => {
  return axiosRetry.isNetworkError(error) ||
    axiosRetry.isRetryableError(error) ||
    error.code === 'ECONNABORTED' ||
    (error.response && error.response.status === 400);
};
axiosRetry(api, { 
  retries: 4 ,
  retryDelay: (retryCount) => {
    return 1000;
  },
  retryCondition: shouldRetry
});
export default api;

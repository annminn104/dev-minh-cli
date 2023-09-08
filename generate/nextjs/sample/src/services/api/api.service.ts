import axios from 'axios';
import { RequestInterceptorReject, RequestInterceptorResolve } from './request.interceptor';
import { ResponseInterceptorFulfilled, ResponseInterceptorRejected } from './response.interceptor';
import { CONTENT_TYPE_ENUM } from '@common/enums';

export const apiService = (() => {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    headers: { 'Content-Type': CONTENT_TYPE_ENUM.JSON }
  });

  instance.interceptors.request.use(RequestInterceptorResolve, RequestInterceptorReject);
  instance.interceptors.response.use(ResponseInterceptorFulfilled, ResponseInterceptorRejected);

  return instance;
})();

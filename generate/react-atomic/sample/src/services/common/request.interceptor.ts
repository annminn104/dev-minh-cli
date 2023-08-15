import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { COOKIE_STORAGE } from '~/@types/enums';
import { CookieUtils } from '~/utils';

export const RequestInterceptorResolve = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const accessToken = CookieUtils.get(COOKIE_STORAGE.ACCESS_TOKEN);
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const RequestInterceptorReject = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

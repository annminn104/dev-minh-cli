import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { CookieUtils } from '@common/utils';
import { COOKIE_STORAGE_ENUM } from '@common/enums';

export const RequestInterceptorResolve = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const accessToken = CookieUtils.get(COOKIE_STORAGE_ENUM.ACCESS_TOKEN);
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const RequestInterceptorReject = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

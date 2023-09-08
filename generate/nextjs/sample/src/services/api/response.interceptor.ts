import { AxiosError, AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { IHttpResponse } from './types';
import { AUTH_ENDPOINT, authService } from '@services/auth/auth.service';

export function ResponseInterceptorFulfilled(
  response: AxiosResponse<AxiosResponse<IHttpResponse<unknown>, unknown>>
): AxiosResponse {
  return response.data;
}

export function ResponseInterceptorRejected(error: AxiosError<AxiosError>) {
  const config = error.response?.config ?? {};
  if (error.response?.status !== 401 || error.config?.url?.includes(AUTH_ENDPOINT.REFRESH_TOKEN)) {
    return Promise.reject(error);
  } else {
    authService.refreshTokenRequest = authService.refreshTokenRequest
      ? authService.refreshTokenRequest
      : authService.refreshToken();

    return authService.refreshTokenRequest.then(() => {
      return apiService({ ...config });
    });
  }
}

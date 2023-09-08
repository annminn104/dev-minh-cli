import { AxiosPromise } from 'axios';
import { apiService } from '../api/api.service';
import { ILoginRequest, ITokenResponse, IUserResponse, IRegisterRequest } from './types';
import { CookieUtils } from '@common/utils';
import { COOKIE_STORAGE_ENUM } from '@common/enums';

export enum AUTH_ENDPOINT {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  REGISTER = '/auth/register',
  PROFILE = '/auth/profile',
  SESSION = '/auth/session',
  REFRESH_TOKEN = '/auth/refresh-token'
}

export const authService = {
  isLogged: false,
  refreshTokenRequest: null as Promise<string> | AxiosPromise | null,

  login: async (data: ILoginRequest): Promise<AxiosPromise> => {
    try {
      const res = await apiService.post(AUTH_ENDPOINT.LOGIN, data);
      authService.isLogged = true;
      if (res.data) {
        authService.setToken(res.data);
      }
      return res.data;
    } catch (error) {
      authService.isLogged = false;
      return Promise.reject(error);
    }
  },

  profile: async (): Promise<IUserResponse> => {
    const res = await apiService.get(AUTH_ENDPOINT.PROFILE);
    return res.data;
  },
  register: async (data: IRegisterRequest): Promise<unknown> => {
    const res = await apiService.post(AUTH_ENDPOINT.REGISTER, data);
    return res.data;
  },

  session: async (): Promise<unknown> => {
    const res = await apiService.get(AUTH_ENDPOINT.SESSION);
    return res.data;
  },

  logout: async (data: { deviceId: string }): Promise<AxiosPromise> => {
    try {
      const res = await apiService.post(AUTH_ENDPOINT.LOGOUT, data);
      if (res) {
        authService.isLogged = false;
        CookieUtils.remove(COOKIE_STORAGE_ENUM.ACCESS_TOKEN);
        CookieUtils.remove(COOKIE_STORAGE_ENUM.REFRESH_TOKEN);
      }
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  isAuthenticated: () => {
    if (authService.isLogged) {
      return true;
    } else if (
      !!CookieUtils.get(COOKIE_STORAGE_ENUM.ACCESS_TOKEN) ||
      !!CookieUtils.get(COOKIE_STORAGE_ENUM.REFRESH_TOKEN)
    ) {
      return true;
    } else {
      return false;
    }
  },

  refreshToken: (): AxiosPromise<ITokenResponse> => {
    return apiService
      .post(AUTH_ENDPOINT.REFRESH_TOKEN, {
        refreshToken: CookieUtils.get(COOKIE_STORAGE_ENUM.REFRESH_TOKEN)
      })
      .then((res) => {
        CookieUtils.set(
          COOKIE_STORAGE_ENUM.ACCESS_TOKEN,
          res.data.accessToken,
          new Date(res.data.accessExpiredAt * 1000)
        );
        CookieUtils.set(
          COOKIE_STORAGE_ENUM.REFRESH_TOKEN,
          res.data.refreshToken,
          new Date(res.data.refreshExpiredAt * 1000)
        );
        return res.data;
      })
      .catch((error) => {
        CookieUtils.remove(COOKIE_STORAGE_ENUM.ACCESS_TOKEN);
        CookieUtils.remove(COOKIE_STORAGE_ENUM.REFRESH_TOKEN);
        authService.isLogged = false;
        window.location.replace('/');
        throw error;
      })
      .finally(() => {
        setTimeout(() => {
          authService.refreshTokenRequest = null;
        }, 10000);
      });
  },

  getAccessToken: () => {
    return CookieUtils.get(COOKIE_STORAGE_ENUM.ACCESS_TOKEN);
  },

  setToken: (data: ITokenResponse) => {
    CookieUtils.set(
      COOKIE_STORAGE_ENUM.ACCESS_TOKEN,
      data.accessToken,
      new Date(data.accessExpiredAt * 1000)
    );
    CookieUtils.set(
      COOKIE_STORAGE_ENUM.REFRESH_TOKEN,
      data.refreshToken,
      new Date(data.refreshExpiredAt * 1000)
    );
  }
};

import { AxiosPromise } from 'axios';

import { apiService } from '../common/api.service';

import { ILoginRequest, ITokenResponse, IUserResponse } from './types';

import { COOKIE_STORAGE } from '~/@types/enums';
import { CookieUtils } from '~/utils';

export enum AUTH_ENDPOINT {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  PROFILE = '/auth/me',
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

  logout: async (): Promise<AxiosPromise> => {
    try {
      const res = await apiService.post(AUTH_ENDPOINT.LOGOUT);
      if (res) {
        authService.isLogged = false;
        CookieUtils.remove(COOKIE_STORAGE.ACCESS_TOKEN);
        CookieUtils.remove(COOKIE_STORAGE.REFRESH_TOKEN);
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
      !!CookieUtils.get(COOKIE_STORAGE.ACCESS_TOKEN) ||
      !!CookieUtils.get(COOKIE_STORAGE.REFRESH_TOKEN)
    ) {
      return true;
    } else {
      return false;
    }
  },

  refreshToken: (): AxiosPromise => {
    return apiService
      .post(AUTH_ENDPOINT.REFRESH_TOKEN, {
        refreshToken: CookieUtils.get(COOKIE_STORAGE.REFRESH_TOKEN)
      })
      .then((res) => {
        CookieUtils.set(
          COOKIE_STORAGE.ACCESS_TOKEN,
          res.data.accessToken,
          new Date(res.data.accessExpire * 1000)
        );
        return res.data;
      })
      .catch((error) => {
        CookieUtils.remove(COOKIE_STORAGE.ACCESS_TOKEN);
        CookieUtils.remove(COOKIE_STORAGE.REFRESH_TOKEN);
        authService.isLogged = false;
        throw error;
      })
      .finally(() => {
        setTimeout(() => {
          authService.refreshTokenRequest = null;
        }, 10000);
      });
  },

  getAccessToken: () => {
    return CookieUtils.get(COOKIE_STORAGE.ACCESS_TOKEN);
  },

  setToken: (data: ITokenResponse) => {
    CookieUtils.set(
      COOKIE_STORAGE.ACCESS_TOKEN,
      data.accessToken,
      new Date(data.accessExpire * 1000)
    );
    CookieUtils.set(
      COOKIE_STORAGE.REFRESH_TOKEN,
      data.refreshToken,
      new Date(data.refreshExpire * 1000)
    );
  }
};

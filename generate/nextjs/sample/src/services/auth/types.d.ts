export interface ILoginRequest {
  username: string;
  password: string;
}

export interface IUserResponse extends IUser {
  role: IUserRole;
}

export interface IUser {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string | null;
  deletedAt: Date | string | null;
  nickName: string;
  fullName: string;
  doB: Date | string | null;
  gender: string;
  email: string | null;
  phone: string;
}

export interface IUserRole {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string | null;
  deletedAt: Date | string | null;
}

type RoleType = 'admin' | ' user';

export interface ITokenResponse {
  accessToken: string;
  accessExpiredAt: number;
  refreshToken: string;
  refreshExpiredAt: number;
}

export type ILoginResponse = ITokenResponse & IUserResponse;

export interface IRegisterRequest {
  username: string;
  phone: number;
  password: string;
  referralCode: string;
}

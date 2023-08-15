import { createSlice } from '@reduxjs/toolkit';

import { IUserResponse } from '~/services/auth/types';

interface IAuthState {
  profile: IUserResponse | null;
  loadingProfile: boolean | null;
}

const initialState: IAuthState = {
  profile: null,
  loadingProfile: null
};

/* Creating a slice of the redux store. */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload !== null ? { ...(action.payload as IUserResponse) } : null;
    },
    setProfileLoading: (state, action) => {
      state.loadingProfile = action.payload;
    },
    reset: () => initialState
  }
});

export const { setProfile, setProfileLoading, reset } = authSlice.actions;

export default authSlice.reducer;

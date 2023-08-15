import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  isOpen: boolean;
  returnUrl?: string;
}

const initialState: IModalState = {
  isOpen: false,
  returnUrl: undefined
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.returnUrl = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.returnUrl = undefined;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

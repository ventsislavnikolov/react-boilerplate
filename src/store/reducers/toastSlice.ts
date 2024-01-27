import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  severity: '',
  isOpen: false,
};

export const toastSlice: any = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action) => ({ ...state, ...action.payload }),
    setToastInitialState: () => initialState,
  },
});

export const { setToast, setToastInitialState } = toastSlice.actions;

export default toastSlice.reducer;

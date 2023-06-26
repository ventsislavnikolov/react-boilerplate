import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  severity: '',
  isOpen: false,
};

// TODO: Fix any type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

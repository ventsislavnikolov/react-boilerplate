import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';

import application from 'store/services/applicationApi';
import toastReducer, { setToast } from 'store/reducers/toastSlice';

import i18n from '../translations';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (store: any) => (next: any) => (action: any) => {
  const { t } = i18n;

  if (isRejectedWithValue(action)) {
    store.dispatch(
      setToast({
        isOpen: true,
        message: t('errors.defaultError'),
        severity: 'error',
        size: 'small',
        viewPort: 'primary',
      }),
    );
  }

  return next(action);
};

export const store: any = configureStore({
  reducer: {
    toast: toastReducer,
    [application.reducerPath]: application.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(application.middleware).concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

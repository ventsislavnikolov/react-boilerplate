import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';

import i18n from 'translations';

import applicationApi from 'store/services/applicationApi';
import applicationReducer from 'store/reducers/applicationSlice';
import toastReducer, { setToast } from 'store/reducers/toastSlice';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (store) => (next) => (action) => {
  const { t } = i18n;

  if (isRejectedWithValue(action)) {
    store.dispatch(
      setToast({
        isOpen: true,
        message: t('errors.defaultError'),
        severity: 'error',
      }),
    );
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    application: applicationReducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationApi.middleware).concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

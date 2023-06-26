import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import * as Toast from '@radix-ui/react-toast';

// UI components
import { ToastMessage } from 'components';

// import store action for set toast initial state
import { setToastInitialState } from 'store/reducers/toastSlice';

// import router
import router from './router';

// import i18n
import 'translations';

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toast = useSelector((state: any) => state.toast);

  return (
    <Toast.Provider swipeDirection='right'>
      <RouterProvider router={router} />
      <ToastMessage
        isOpen={toast.isOpen}
        message={toast.message}
        severity={toast.severity}
        onOpenChange={() => dispatch(setToastInitialState())}
      />
    </Toast.Provider>
  );
}

export default App;

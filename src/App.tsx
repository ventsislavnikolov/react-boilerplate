import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ToastMessage } from 'components';
import { setToastInitialState } from 'store/reducers/toastSlice';

import router from 'router';

import 'translations';

type ToastType = {
  toast: {
    size: 'small';
    isOpen: boolean;
    message: string;
    viewPort: 'primary';
    severity: 'success' | 'error' | 'primary';
  };
};

function App() {
  const dispatch = useDispatch();
  const toast = useSelector((state: ToastType) => state.toast);

  return (
    <>
      <RouterProvider router={router} />
      <ToastMessage
        size={toast.size}
        isOpen={toast.isOpen}
        message={toast.message}
        intent={toast.severity}
        viewPort={toast.viewPort}
        onOpenChange={() => dispatch(setToastInitialState())}
      />
    </>
  );
}

export default App;

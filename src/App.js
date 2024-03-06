import { Provider } from 'react-redux';
import { store } from './state/store';
import { RouterProvider } from 'react-router-dom';

function App({ router }) {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

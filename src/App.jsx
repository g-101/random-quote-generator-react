import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

function App() {
  console.log('app running');

  return <RouterProvider router={router} />;
}

export default App;

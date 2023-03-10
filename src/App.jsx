import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import Quotes from './pages/Quotes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/quotes', element: <Quotes /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

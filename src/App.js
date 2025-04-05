import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;

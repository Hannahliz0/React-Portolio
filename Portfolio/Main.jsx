
// Correcting the imports by making the paths relative to the current directory
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Assets/bootstrap/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';

import About from './src/components/About'; 
import Portfolio from './src/components/Portfolio';
import Contact from './src/components/Contact';
import Resume from './src/components/Resume';
import Header from './src/Layout/Header';
import Footer from './src/Layout/Footer';




// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Header',
        element: <Header/>,
      },
      { path: '/Footer', 
        element: <Footer />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


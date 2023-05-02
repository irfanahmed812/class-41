import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/UsersToUser/Users';
import UserDetails from './Components/UsersToUser/UserDetails/UserDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/users',
          element: <Users></Users>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/user/:userId',
          element: <UserDetails></UserDetails>,
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          }
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

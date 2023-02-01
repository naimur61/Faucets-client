import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Login from '../Pages/authentication/Login';
import Registration from '../Pages/authentication/Registration';
import FAQ from '../Pages/FAQ';
import Home from '../Pages/Home';
import Users from '../Pages/Users';



export const Routes = createBrowserRouter([

   // Main Layout 
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Home /> },
         { path: '/home', element: <Home /> },
         { path: '/login', element: <Login /> },
         { path: '/faq', element: <FAQ /> },
         { path: '/users', element: <Users /> },
         { path: '/registration', element: <Registration /> },
         // { path: '/login', element: <Login /> },
         // { path: '/signup', element: <SignUp /> },
         // { path: '/home', element: <Home /> },
         // { path: '/details/:id', element: <PrivetRoutes><Details /></PrivetRoutes>, loader: ({ params }) => fetch(`https://m-server-pi.vercel.app/posts/${params.id}`) },

      ]
   },

])


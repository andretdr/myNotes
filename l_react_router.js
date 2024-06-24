// https://hygraph.com/blog/routing-in-react
// https://www.youtube.com/watch?v=oTIJunBa6MA

// install 
npm install react-router-dom@6

// replace main render and import
// https://reactrouter.com/en/main/routers/picking-a-router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/profiles', element: <Profiles />}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(

    <Router.Provider router={router} />
  
)

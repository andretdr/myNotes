// https://hygraph.com/blog/routing-in-react
// https://www.youtube.com/watch?v=oTIJunBa6MA

// install 
npm install react-router-dom@6

// replace main render and import
// https://reactrouter.com/en/main/routers/picking-a-router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import Profiles from './pages/Profiles.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
    {path: '/', element: <HomePage />, errorElement: <Error />},
    {path: '/profiles', element: <Profiles />, errorElement: <Error />}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(

    <Router.Provider router={router} />
  
)

// LINK

import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return 
        <div> 404 Not Found
            <Link to="/">Home</Link> // THIS JUST DOES A JS RERENDER ON CLIENTSIDE FOR THE SCREEN. BETTER!
            <a href="/">Home</a> // THIS DOES A FULL REFRESH GOING TO THE LINK
        <div>
}

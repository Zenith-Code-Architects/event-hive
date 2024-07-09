import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CreateEvent from './pages/CreateEvent'
import CollegePage from './pages/CollegePage'
import EventsPage from './pages/EventsPage'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/college-page", element: <CollegePage/> },
    { path: "/create-event", element: <CreateEvent/>},
    { path: "/events-page", element: <EventsPage/> },
    { path: "/not-found", element: <NotFound/> },
    { path: "/signin", element: <SignIn/> },
    { path: "/signup", element: <SignUp/>}
  ])

  return <RouterProvider router={router} />
}

export default App

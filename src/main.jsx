import React from 'react'
import ReactDOM from 'react-dom/client'   
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Community from './pages/Community.jsx'
import Products from './pages/Products.jsx'
import Tracker from './pages/Tracker.jsx'
import Learn from './pages/Learn.jsx'
import Articles from './pages/Learn/Articles.jsx'
import Video from './pages/Learn/Video.jsx'
import Quiz from './pages/Learn/Quiz.jsx'
import Suggestions from './pages/Learn/Suggestions.jsx'
import LearnHome from './pages/Learn/LearnHome.jsx'
import TrackerHome from './pages/Tracker/TrackerHome.jsx'
import BestRoute from './pages/Tracker/BestRoute.jsx'
import CalcucateCarbon from './pages/Tracker/CalcucateCarbon.jsx'
import CommunityHome from './pages/Community/CommunityHome.jsx'
import Ngo from './pages/Community/Ngo.jsx'
import Volunteer from './pages/Community/Volunteer.jsx'
import Events from './pages/Community/Events.jsx'
import Login from './pages/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:'/communities',
    element:<Community/>,
    children:[
      {
        element: <CommunityHome/>,
        path: '/communities/'
      },
      {
        element: <Ngo/>,
        path: '/communities/ngo'
      },
      {
        element: <Volunteer/>,
        path: '/communities/volunteer'
      },
      {
        element: <Events/>,
        path: '/communities/events'
      },
    ]
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/learn',
    element:<Learn/>,
    children:[
      {
        path:'/learn/',
        element:<LearnHome/>
      },
      {
        path:'/learn/articles',
        element:<Articles/>
      },
      {
        path:'/learn/videos',
        element:<Video/>
      },
      {
        path:'/learn/quiz',
        element:<Quiz/>
      },
      {
        path:'/learn/suggestions',
        element:<Suggestions/>
      }

    ]
  },
  {
    path:'/travel-tracker',
    element:<Tracker/>,
    children:[
      {
        path:'/travel-tracker',
        element:<TrackerHome/>
      },
      {
        path:'/travel-tracker/best-route',
        element:<BestRoute/>
      },
      {
        path:'/travel-tracker/carbon-calculator',
        element:<CalcucateCarbon/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

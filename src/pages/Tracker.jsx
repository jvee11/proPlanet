import React from 'react'
import './css/tracker.css'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


function Tracker() {
    const headerItems = 
    [
      {
        name: "Home",
        slug: '/'
      },
      {
        name: "Carbon Calculate",
        slug: '/travel-tracker/carbon-calculator'
      },
      {
        name: "Best route",
        slug: '/travel-tracker/best-route'
      }, 
    ]  
    return (
    <div>
        <Header headerItems={headerItems}/>
        <div className='background'> 
            <Outlet/>
        </div>
    </div>
  )
}

export default Tracker

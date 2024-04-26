import React from 'react'
import './css/community.css'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function Community() {
    
    const headerItems = 
    [
      {
        name: "Home",
        slug: '/'
      },
      {
        name: "NGOs",
        slug: '/communities/ngo'
      },
      {
        name: "Volunteer",
        slug: '/communities/volunteer'
      },
      {
        name: "Events",
        slug: '/communities/events'
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

export default Community

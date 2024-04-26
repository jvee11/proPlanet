import React from 'react'
import './css/learn.css'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


function Learn() {
    const headerItems = 
    [
      {
        name: "Home",
        slug: '/'
      },
      {
        name: "Articles",
        slug: '/learn/articles'
      },
      {
        name: "Videos",
        slug: '/learn/videos'
      },
      
      {
        name: "Quiz",
        slug: '/learn/quiz'
      },
      {
        name: "Suggestion",
        slug: '/learn/suggestions'
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

export default Learn

import React from 'react'
import './css/home.css'
import Header from '../components/Header'

function Home() {

    const headerItems = 
    [
      {
        name: "Home",
        slug: '/'
      },
      {
        name: "Learn",
        slug: '/learn'
      },
      {
        name: "Community",
        slug: '/communities'
      },  
      {
        name: "Products",
        slug: '/products'
      },
      {
        name: "Travel Tracker",
        slug: '/travel-tracker'
      },

    ]  
  return (
    <div className='' >
      <Header headerItems = {headerItems}/>

      <div className='background'> 
        Home Page
      </div>
     
      
    </div>
  )
}

export default Home

import React from 'react'
import './css/product.css'
import Header from '../components/Header';


function Products() {
    const headerItems = 
    [
      {
        name: "Home",
        slug: '/'
      },
      {
        name: "Buy",
        slug: '/learn'
      },
      {
        name: "Cart",
        slug: '/communities'
      }, 
    ]  
    return (
    <div>
        <Header headerItems={headerItems}/>
        <div className='background'> 
            Product Page
        </div>
    </div>
  )
}

export default Products

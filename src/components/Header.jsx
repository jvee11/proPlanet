import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'

function Header(props) {

    const navigate = useNavigate();
    

    return (
    <div className='navBar'>

        
        <div className=''>
            <button className='nav-item' onClick={()=>navigate('/')}>PlanetX</button>
        </div>

        <div className='central-lane-nav'>
           
                {
                    props.headerItems.map((item)=>(
                        <button key={item.name} className='nav-item' onClick={()=>navigate(item.slug)}>{item.name}</button>
                    ))
                }
            
            {/* <button className='nav-item' onClick={()=>navigate('/')}>Home</button> 
            <button className='nav-item' onClick={()=>navigate('/communities')}>Communities</button> 
            <button className='nav-item' onClick={()=>navigate('/learn')}>Learn</button> 
            <button className='nav-item' onClick={()=>navigate('/blogs')}>Blog</button> 
            <button className='nav-item' onClick={()=>navigate('/products')}>Products</button> 
            <button className='nav-item' onClick={()=>navigate('/travel-tracker')}>Travel Tracker</button>  */}
        </div>

        <div className='nav-last'>
            <button className='nav-item'>Profile</button>
            <button className='nav-item'>ChatBot</button>
        </div>
    </div>
)
}

export default Header

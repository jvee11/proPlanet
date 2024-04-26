// Home.js
import React from 'react';
import Header from '../components/Header';
import './css/home.css';

function Home() {
    const headerItems = [
        { name: "Home", slug: '/' },
        { name: "Learn", slug: '/learn' },
        { name: "Community", slug: '/communities' },
        { name: "Products", slug: '/products' },
        { name: "Travel Tracker", slug: '/travel-tracker' },
        { name: "Sign Up", slug: '/signup' },
    ];

    return (
        <div>
            <Header headerItems={headerItems} />
            <div className='background'>
                <h1>Welcome to PlanetX</h1>
                <p>Your destination for all things green and eco-friendly.</p>
            </div>
        </div>
    );
}

export default Home;

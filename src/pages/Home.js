import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FaeturedRooms from '../components/FeaturedRoom'
import FeaturedRoom from '../components/FeaturedRoom'

export default function Home() {
    return (
        <div>
            <Hero>
                <Banner title="luxuriuos rooms" subtitle="deluxe rooms starting at $299">
                    <Link to='/rooms' className="btn-primary">
                        Our rooms
          </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
            
       </div>
    );
}

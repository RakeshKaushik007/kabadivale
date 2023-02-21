import './homepage.css';
import React from 'react';
import { Landing } from './landing/landing';
import { AboutUs } from './aboutus/aboutus';
import { Inits } from './inits/inits';
import { Services } from './services/services';
import { Footer } from './footer/footer';


export const HomePage = () => {

    return (
        <div className="homepage">
            
            <Landing />
            <AboutUs />
            <Inits />
            <Services />
            <Footer />
            
        </div>
    )
}
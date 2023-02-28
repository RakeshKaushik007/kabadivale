import React from 'react';
import './services.css';

import dummy from '../../../assets/homepage/services/dummy.png';
import one from '../../../assets/homepage/services/1.png';
import two from '../../../assets/homepage/services/2.png';
import three from '../../../assets/homepage/services/3.png';
import four from '../../../assets/homepage/services/4.png';


export const Services = () => {
    return <div className="landing-services">

        <div className="landing-services-head flex-a-cen-j-cen">
            <img src={dummy} alt="" />

            <div className="font-30">
                <span className='color-grey'>Our</span> &nbsp;
                <span className='color-green'>Services</span>
            </div>
        </div>

        <div className="services-img-container">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
        </div>

    </div>
}
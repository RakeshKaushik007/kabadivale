import React from 'react';
import './inits.css';

import one from '../../../assets/homepage/inits/1.png';
import two from '../../../assets/homepage/inits/2.png';
import three from '../../../assets/homepage/inits/3.png';
import four from '../../../assets/homepage/inits/4.png';

import dummy from '../../../assets/homepage/inits/dummy.png';

export const Inits = () =>{
    return (
        <div className="landing-inits">

            <div className="landing-inits-heading flex-a-cen-j-cen">
                <img src={dummy} alt="" />

                <div className="font-30">
                    <span>Our</span> &nbsp;
                    <span>Initiatives</span>
                </div>
            </div>

            <div className="inits-img-container">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
            </div>

        </div>
    )
}
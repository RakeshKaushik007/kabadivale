import React from 'react';
import './inits.css';

import one from '../../../assets/homepage/inits/1.png';
import two from '../../../assets/homepage/inits/2.png';
import three from '../../../assets/homepage/inits/3.png';
import four from '../../../assets/homepage/inits/4.png';

export const Inits = () =>{
    return (
        <div className="landing-inits">

            <div className="inits-img-container">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
            </div>

        </div>
    )
}
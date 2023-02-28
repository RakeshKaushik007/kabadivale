import React from 'react';
import './landing.css';

import rrr from '../../../assets/homepage/rrr.png';

export const Landing = () =>{

    return(
        <div className="landing">

            <div className='landing-image font-128'>
                <div className='landing-kabadivale'>
                    KABADIVALE
                </div>
            </div>

            <div className='landing-bottom font-mont flex-a-cen-j-spbet text-align-left'>
                <div className='landing-left'>
                    <div className="font-24 font-mont semi-bold">Our Eco-System towards</div>
                    <div className="font-32 font-mont extra-bold color-8CDC4C">
                        Sustainability & Product 
                        <br /> circularity
                        </div>
                    <div className="semi-bold font-mont font-20 color-grey ">
                        Kabadiwale provides every individual  the opportunity to  <br /> take part in betterment of <span className='color-82CD47 font-mont'>environment</span>  
                    </div>
                    
                    
                    <div className="landing-button-more font-mont">more</div>
                </div>

                <div className='landing-right'>
                    <img src={rrr} alt="recycle reuse make" />
                </div>
            </div>
        </div>
    )
}
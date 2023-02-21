import React  from "react";
import './aboutus.css';

import zerowaste from '../../../assets/homepage/zerowaste.png';

export const AboutUs = () =>{
    return(
        <div className="landing-aboutus flex-a-cen-j-spbet">

            <div className="left">
                <div className="font-55">
                    Join  Hands towards better future

                    <br />
                    

                    <img src={zerowaste} alt="" />
                </div>
            </div>

            <div className="right">
                <div className="font-32">About Us</div>
                <br />
                <div className="font-18">

We are another definition for the innovation as we know how to make productive things from the waste one. We dream serving our customers the best service. We are likely to create more and more opportunities for the people who are willing to make their effort in building a sustainable and pollution free environment.
                </div>
            </div>

        </div>
    )
}
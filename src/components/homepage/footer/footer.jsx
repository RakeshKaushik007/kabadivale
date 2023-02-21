import React from "react";
import './footer.css';

import bottomimg from '../../../assets/footer/bottom-img.png';

export const Footer = () => {
    return <div className="footer">

        <div className="footer-gradient">

        </div>

        <div className="footer-content color-white flex text-align-left">

            <div className="footer-col-1">
                <div>
                    Services
                </div>
                <div>
                    Scrap Pickup
                </div>
                <div>
                    Corporate Tie-Up
                </div>
                <div>
                    Join as Dealer
                </div>
            </div>

            <div className="footer-col-2">
                <div>
                    Support
                </div>
                <div>
                    Contact Us
                </div>
                <div>
                    Help & FAQ
                </div>
            </div>

            <div className="footer-col-3">
                <div>
                    Our Rate Card
                </div>
                <div>
                    Scrap Rate Card
                </div>
                <div>
                    Rate Card Calculator
                </div>
            </div>

            <div className="footer-col-4 text-align-left">
                <div className="font-20">Subscribe</div>
                <input type="number" name="" placeholder="Contact no." id="" /> 
                
                <input type="email" name="" placeholder="Email" id="" />
                <div className="subscribe cursor-pointer">Subscribe</div>

                <img src={bottomimg} alt="" />
            </div>

        </div>

    </div>
}
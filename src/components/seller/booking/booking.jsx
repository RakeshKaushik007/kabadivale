import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../homepage/footer/footer";
import './booking.css';

import userlogo from '../../../assets/seller/user-logo.png';

export const SellerBooking = () => {

    const nav = useNavigate();

    return <div className="seller-booking">

        <div className="seller-common-header font-12 flex color-white">
            <div>
                <div onClick={()=> nav('/profile')} className="profile cursor-pointer font-mont medium-bold flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

            </div>
        </div>

        <div className="space-v-23"></div>

        <div className="flex-a-cen-j-cen color-dark-grey flex-d-col">
            <div className="font-32">Bookings</div>

            <div className="space-v-65"></div>

            <div className="seller-booking-details">
                <div className="product-list">
                    <div className="font-24">Product List</div>
                </div>

                <div className="date-time">
                    <div className="font-24">Date & Time</div>
                </div>

                <div className="address">
                    <div className="font-24">Address</div>
                    <br />
                    <div className="booking-addresses">
                        <div className="seller-address">
                            <div>
                                <ul className="text-align-left">
                                    <li className="bold">Alokita Verma</li>
                                    <li>C100 Rajajipuram</li>
                                    <li>C block Rajajipuram</li>
                                    <li>LUCKNOW, UTTAR PRADESH 226017</li>
                                    <li>Phone number: 7289996430</li>
                                    <li className="bold">TIME-10:30-11:30 AM</li>
                                </ul>
                        </div>
            </div>
                    </div>
                </div>
            </div>

            <div className="space-v-45"></div>

            <div className="booking-confirm cursor-pointer">BOOK</div>
        </div>

        <div className="space-v-65"></div>
        <Footer />
    </div>
}
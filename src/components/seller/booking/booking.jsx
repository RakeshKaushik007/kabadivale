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
                <div onClick={()=> nav('/profile')} className="profile cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

            </div>
        </div>

        <div className="space-v-23"></div>

        <div className="flex-a-cen-j-cen flex-d-col">
            <div className="font-32">Bookings</div>

            <div className="space-v-65"></div>

            <div className="seller-booking-details flex-a-cen-j-spbet">
                <div className="product-list">
                    <div className="font-24">Product List</div>
                </div>

                <div className="date-time">
                    <div className="font-24">Date & Time</div>
                </div>

                <div className="address">
                    <div className="font-24">Address</div>
                </div>
            </div>

            <div className="space-v-45"></div>

            <div className="booking-confirm cursor-pointer">BOOK</div>
        </div>

        <div className="space-v-65"></div>
        <Footer />
    </div>
}
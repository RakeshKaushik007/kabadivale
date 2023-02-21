import React from "react";
import { Footer } from "../../homepage/footer/footer";
import './booking.css';

export const SellerBooking = () => {
    return <div className="seller-booking">

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
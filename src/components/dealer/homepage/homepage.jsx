import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import './homepage.css';

import userlogo from '../../../assets/seller/user-logo.png';
import dummy from '../../../assets/seller/dummy.png';
import addbooking from '../../../assets/dealer/addbooking.png';

export const DealerHomepage = () => {
    const nav = useNavigate();

    const navProfile = () => {
        nav({
            pathname: '/profile',
            search: `?${createSearchParams({type: 'dealer'})}`
        });
    }

    const navProductDesc = () => {
        nav({
            pathname: '/product-desc',
            search: `?${createSearchParams({type: 'dealer'})}`
        })
    }

    return <div className="dealer-homepage">
        <div className="seller-category-header">
            <div className="category-header-options font-12 flex color-white">
                <div onClick={navProfile} className="profile cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

            </div>

            <div className="category-header-content flex-a-cen-j-cen">
                <img src={dummy} width="95px" alt="" />

                <div className="font-32 color-white">
                    &nbsp;Help  us  to  promote  PRODUCT CIRCULARITY
                </div>


            </div>
        </div>

<br /><br />
        <div className="dealer-homepage-content flex-a-cen-j-cen flex-d-col">

            <div className="font-32">Details of bookings</div>

            <div className="dealer-bookings">
                <div>
                    <ul className="text-align-left">
                        <li className="bold">Alokita Verma</li>
                        <li>C100 Rajajipuram</li>
                        <li>C block Rajajipuram</li>
                        <li>LUCKNOW, UTTAR PRADESH 226017</li>
                        <li>Phone number: 7289996430</li>
                        <li className="bold">TIME-10:30-11:30 AM</li>
                    </ul>

                    <div className="dealer-accept">Accept</div>
                </div>
            </div>

            <div onClick={navProductDesc}  className="dealer-add-booking cursor-pointer">
                <img src={addbooking} alt="" />
                <div className="font-16">Add item to buyer section</div>
            </div>

        </div>

    </div>
}
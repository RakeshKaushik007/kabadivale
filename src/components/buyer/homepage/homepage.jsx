import React from "react";
import './homepage.css';

import dummy from '../../../assets/seller/dummy.png';
import bookinglogo from '../../../assets/seller/booking-logo.png';
import userlogo from '../../../assets/seller/user-logo.png';
import { useNavigate } from "react-router-dom";
import { Footer } from "../../homepage/footer/footer";

import one from '../../../assets/buyer/homepage/1.png';
import two from '../../../assets/buyer/homepage/2.png';
import three from '../../../assets/buyer/homepage/3.png';
import four from '../../../assets/buyer/homepage/4.png';
import five from '../../../assets/buyer/homepage/5.png';
import six from '../../../assets/buyer/homepage/6.png';
import seven from '../../../assets/buyer/homepage/7.png';
import eight from '../../../assets/buyer/homepage/8.png';
import nine from '../../../assets/buyer/homepage/9.png';
import ten from '../../../assets/buyer/homepage/10.png';
import oneone from '../../../assets/buyer/homepage/11.png';
import onetwo from '../../../assets/buyer/homepage/12.png';


export const BuyerHomepage = () => {
    const nav = useNavigate();
    const data = [
        {
            "img" : one,
            'price' : 1500,
        },
        {
            "img" : two,
            'price' : 20000,
        },
        {
            "img" : three,
            'price' : 1000,
        },
        {
            "img" : four,
            'price' : 700,
        },
        {
            "img" : five,
            'price' : 500,
        },
        {
            "img" : six,
            'price' : 5000,
        },
        {
            "img" : seven,
            'price' : 30000,
        },
        {
            "img" : eight,
            'price' : 150000,
        },
        {
            "img" : nine,
            'price' : 15000,
        },
        {
            "img" : ten,
            'price' : 800,
        },
        {
            "img" : oneone,
            'price' : 500,
        },
        {
            "img" : onetwo,
            'price' : 300,
        },
    ];

    return <div className="buyer-homepage">

        <div className="seller-category-header">
            <div className="category-header-options font-12 flex medium-bold color-white">
                <div onClick={()=>nav('/booking')} className="bookings font-mont cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={bookinglogo} alt="" />
                    CART
                </div>

                <div onClick={()=> nav('/profile')} className="profile font-mont cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

                <div onClick={()=>nav('/category')} className="buyer cursor-pointer">
                    <div className="font-16 font-mont extra-bold">SELLER</div>
                </div>
            </div>

            <div className="category-header-content flex-a-cen-j-cen">
                <img src={dummy} width="95px" alt="" />

                <div className="font-32 color-white">
                    &nbsp;Help  us  to  promote  PRODUCT CIRCULARITY
                </div>


            </div>
        </div>

        <div className="buyer-search-container">

        </div>

        <div className="buyer-category-container">
            <div className="font-16">Category</div>
            <div className="font-16">Vehicle</div>
            <div className="font-16">Furniture</div>
            <div className="font-16">Cloths</div>
            <div className="font-16">Mobile</div>
        </div>

        <div className="buyer-category-holder">
            {
                data.map(d => {
                    return <div className="buyer-category-item">
                        <img src={d.img} alt="" />
                        <div className="space-v-8"></div>
                        <div className="font-16">Rs. {d.price}</div>
                        <div className="buyer-add-to-cart">Add to Cart</div>
                    </div>
                })
            }
        </div>

        <Footer />
    </div>
}
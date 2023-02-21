import React from "react";
import './category.css';

import dummy from '../../../assets/seller/dummy.png';
import { Footer } from "../../homepage/footer/footer";
import { SellerCategoryCard } from "./card/card";
import newspaper from '../../../assets/seller/newspaper.png';
import metal from '../../../assets/seller/metal.png';
import vehicle from '../../../assets/seller/vehicle.png';
import gatta from '../../../assets/seller/gatta.png';
import book from '../../../assets/seller/book.png';
import cloth from '../../../assets/seller/cloth.png';
import furniture from '../../../assets/seller/furniture.png';
import plastic from '../../../assets/seller/plastic.png';
import magazine from '../../../assets/seller/magzine.png';
import bookinglogo from '../../../assets/seller/booking-logo.png';
import userlogo from '../../../assets/seller/user-logo.png';
import { useNavigate } from "react-router-dom";

export const SellerCategory = () => {

    const nav = useNavigate();
    const data = [
        {
            'img' : newspaper,
            'name' : 'Newspaper',
        },
        {
            'img' : metal,
            'name' : 'Metal',
        },
        {
            'img' : vehicle,
            'name' : 'Vehicle',
        },
        {
            'img' : gatta,
            'name' : 'Gutta',
        },
        {
            'img' : book,
            'name' : 'Book',
        },
        {
            'img' : cloth,
            'name' : 'Cloth',
        },
        {
            'img' : furniture,
            'name' : 'Furniture',
        },
        {
            'img' : plastic,
            'name' : 'Plastic',
        },
        {
            'img' : magazine,
            'name' : 'Magazine',
        },
    ];

    return <div className="seller-category">
        <div className="seller-category-header">
            <div className="category-header-options font-12 flex color-white">
                <div className="bookings cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={bookinglogo} alt="" />
                    BOOKINGS
                </div>

                <div onClick={()=> nav('/profile')} className="profile cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

                <div onClick={()=>nav('/buyer')} className="buyer cursor-pointer">
                    <div className="font-16 bold">BUYER</div>
                </div>
            </div>

            <div className="category-header-content flex-a-cen-j-cen">
                <img src={dummy} width="95px" alt="" />

                <div className="font-32 color-white">
                    &nbsp;Help  us  to  promote  PRODUCT CIRCULARITY
                </div>


            </div>
        </div>

        <br />

        <div className="flex-a-cen-j-cen flex-d-col">

            <div className="font-32">Categories</div>
            <br /><br />
            <div className="seller-category-grid">
                {
                    data.map(d => {
                        return <SellerCategoryCard key={d.name} img={d.img} name={d.name} />
                    })
                }
            </div>
        </div>

        <br /><br /><br />

        <Footer />
    </div>
}
import React from "react";
import './card.css';

export const SellerCategoryCard = ({key,img, name}) =>{
    return <div key={key} className="seller-category-card flex-a-cen-j-cen flex-d-col">
        <img src={img} alt="" />
        <div className="space-v-23"></div>
        <div className="font-18">{name}</div>
        <div className="space-v-8"></div>
        <div className="rate-list cursor-pointer">Rate List</div>
        <div className="space-v-13"></div>
        <div className="book cursor-pointer">Book Appointment</div>
    </div>
}
import React from "react";
import { Footer } from "../../homepage/footer/footer";
import './product_desc.css';

import bookinglogo from '../../../assets/seller/booking-logo.png';
import userlogo from '../../../assets/seller/user-logo.png';
import addphoto from '../../../assets/seller/addphoto.png';
import { useNavigate, useSearchParams } from "react-router-dom";

export const SellerProductDesc = () => {
    const nav = useNavigate();
    const [searchParams] = useSearchParams();

    const navBooking = () => {
        const type = searchParams.get('type') || '';
        if(type === 'dealer'){
            nav('/dealer');
        }
        else{
            nav('/booking')
        }
    }

    const submit = () => {
        const type = searchParams.get('type') || '';
        if(type === 'dealer'){
            nav('/dealer');
        }
        else{
            nav('/category')
        }
    }

    return <div className="seller-product-desc">

        <div className="seller-common-header font-12 flex medium-bold color-white">
            <div>
                <div onClick={navBooking}  className="bookings cursor-pointer font-mont flex-a-cen-j-cen flex-d-col">
                    <img src={bookinglogo} alt="" />
                    BOOKINGS
                </div>

                <div onClick={()=> nav('/profile')} className="profile font-mont cursor-pointer flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

            </div>
        </div>

        <div className="seller-product-desc-padding">
            <div className="font-32 color-grey">Post Your Ad</div>

            <div className="product-desc-body text-align-left">
                <div className="font-32">Select the Category</div>

                <div className="font-24">
                    <span className="color-grey">Mobile Phones</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>Change</span>
                </div>

                <div className="product-desc-hr"></div>

                <div className="font-32">Includes some details</div>

                <div className="product-ad-title color-grey">
                    <div className="font-24">Ad Title*</div>
                    <div className="space-v-8"></div>
                    <textarea name="" id="" cols="60" rows="8"></textarea>
                    <div className="font-20">Mention the key  features  of  your  item</div>
                </div>

                <div className="product-desc-box color-grey">
                    <div className="font-24">Description</div>
                    <div className="space-v-8"></div>
                    <textarea name="" id="" cols="60" rows="8"></textarea>
                    <div className="font-20">Include  condition  features  and  reason  for  selling </div>
                </div>

                <div className="product-desc-hr"></div>

                <div className="font-32">Set A Price</div>

                <div className="product-set-price">
                    <div className="font-24 color-grey">Price *</div>
                    <div className="space-v-8"></div>
                    <input type="text" />
                    
                </div>

                <div className="product-desc-hr"></div>

                <div className="font-32">Upload Up to 12 photos</div>

                <div className="upload-product-img">
                    <img src={addphoto} height="350" alt="" />
                </div>
            </div>

            <div onClick={submit} className="submit-product-desc font-mont bold font-26 cursor-pointer">
                {searchParams.get('type') === "dealer" ? "ADD" : "Book Appointment"}
            </div>
        </div>

        <Footer />
    </div>
}
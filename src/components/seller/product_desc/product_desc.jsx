import React from "react";
import { Footer } from "../../homepage/footer/footer";
import './product_desc.css';

export const SellerProductDesc = () => {
    return <div className="seller-product-desc">

        <div className="seller-product-desc-padding">
            <div className="font-32">Post Your Ad</div>

            <div className="product-desc-body text-align-left">
                <div className="font-32">Select the Category</div>

                <div className="font-24">
                    <span>Mobile Phones</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>Change</span>
                </div>

                <div className="product-desc-hr"></div>

                <div className="font-32">Includes some details</div>

                <div className="product-ad-title">
                    <div className="font-24">Ad Title*</div>
                    <div className="space-v-8"></div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div className="font-20">Mention the key  features  of  your  item</div>
                </div>

                <div className="product-desc-box">
                    <div className="font-24">Description</div>
                    <div className="space-v-8"></div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div className="font-20">Include  condition  features  and  reason  for  selling </div>
                </div>

                <div className="product-desc-hr"></div>

                <div className="font-32">Set A Price</div>

                <div className="product-set-price">
                    <div className="font-24">Price *</div>
                    <div className="space-v-8"></div>

                    
                </div>

                <div className="product-desc-hr"></div>

                <div className="font-32">Upload Up to 12 photos</div>

                <div className="upload-product-img">

                </div>
            </div>

            <div className="submit-product-desc font-26 cursor-pointer">
                Book Appointment
            </div>
        </div>

        <Footer />
    </div>
}
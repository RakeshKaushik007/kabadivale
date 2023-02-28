import React from 'react';
import './profile.css';

import order from '../../../assets/seller/order.png';
import security from '../../../assets/seller/security.png';
import address from '../../../assets/seller/address.png';
import payment from '../../../assets/seller/payment.png';
import contact from '../../../assets/seller/contact.png';
import { Footer } from '../../homepage/footer/footer';
import bookinglogo from '../../../assets/seller/booking-logo.png';
import userlogo from '../../../assets/seller/user-logo.png';
import { useNavigate } from 'react-router-dom';
import profile from '../../../assets/profile.png'

const SellerProfileCard = ({img, head, body}) =>{
    return <div className="seller-profile-card flex-a-cen-j-cen">
        <img src={img} alt="" />

        <div>
            <div className="font-24">{head}</div>
            <div className="space-v-8"></div>
            <div className="font-18 font-mont medium-bold">{body}</div>
        </div>
    </div>
}

export const SellerProfile = () => {
    const nav = useNavigate();
    const data = [
        {
            'img' : order,
            'head' : 'Your Order',
            'body' : 'Track your booking, or buy things again',
        },
        {
            'img' : security,
            'head' : 'Login & Security',
            'body' : 'Edit name, email, and mobile numbers',
        },
        {
            'img' : address,
            'head' : 'Your Address',
            'body' : 'Edit Address',
        },
        {
            'img' : payment,
            'head' : 'Payment Options',
            'body' : 'Edit or add payment methods',
        },
        {
            'img' : contact,
            'head' : 'Contact Us',
            'body' : 'Facing issues, no problem we have got you covered',
        },
    ];

    return <div className="seller-profile">

        <div className="seller-common-header font-12 flex medium-bold color-white">
            <div>
                <div onClick={()=> nav('/booking')}  className="bookings cursor-pointer font-mont flex-a-cen-j-cen flex-d-col">
                    <img src={bookinglogo} alt="" />
                    BOOKINGS
                </div>

                <div onClick={()=> nav('/profile')} className="profile cursor-pointer font-mont flex-a-cen-j-cen flex-d-col">
                    <img src={userlogo} alt="" />
                    PROFILE
                </div>

            </div>
        </div>

        <div className='seller-profile-padding'>
            <div className="profile-photo-card flex-a-cen gap-2rem text-align-left">
                <img src={profile} alt="" className='profile-photo-img' /> 

                <div className='profile-name'>
                    <div className="font-36 font-mont semi-bold">Sunaina Kapoor</div>
                    <div className="font-24 font-mont">sunainak@gmail.com</div>
                </div>
            </div>

            <br /><br />

            <div className="seller-profile-details text-align-left">
                <div className="font-40">Your Account</div>
                <br />
                <div className="flex-a-cen flex-wrap gap-2rem">
                    {
                        data.map(d=>{
                            return <SellerProfileCard img={d.img} head={d.head} body={d.body} />
                        })
                    }
                </div>
            </div>
        </div>

        <Footer />
    </div>
}
import React from "react";
import './sellbuy.css';

import seller from '../../../assets/homepage/seller.png';
import dealer from '../../../assets/homepage/buyer.png';
import next from '../../../assets/homepage/next.png';
import back from '../../../assets/homepage/back.png';
import { createSearchParams, useNavigate } from "react-router-dom";

export const LandingSellBuy = ()=>{
    const nav = useNavigate();

    const navSeller = () => {
        const params = {
            type: 'seller'
        };
        nav({
            pathname: '/register',
            search: `?${createSearchParams(params)}`
        });
    }

    const navDealer = () => {
        const params = {
            type: 'dealer'
        };
        nav({
            pathname: '/register',
            search: `?${createSearchParams(params)}`
        });
    }

    return <div className="landing-sell-buy flex flex-d-col">

        <div className="landing-seller flex-a-end">
            <img src={seller} alt="" />

            <div className="seller-content">
                <div className="font-32">SELLER/BUYER</div>
                <div className="font-20">Want to sell scrap or buy second hand items</div>

                <div onClick={navSeller} className="cursor-pointer font-12 flex-a-cen">
                    <img src={next} alt="" /> &nbsp;
                    Login/Sign up
                </div>
            </div>
        </div>

        <div className="landing-dealer flex-a-end">
            <div className="dealer-content">
                <div className="font-32">Dealer</div>
                <div className="font-20">Want to buy scrap <br /> items</div>
                <div onClick={navDealer} className="cursor-pointer font-12 flex-a-cen float-right">
                    Login/Sign up &nbsp;
                    <img src={back} alt="" />
                </div>
            </div>

            <img src={dealer} alt="" />
        </div>

    </div>
}
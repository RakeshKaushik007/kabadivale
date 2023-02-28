import React from "react";
import './login.css';

import sideimage from '../../assets/login/side-img.png';
import bottomimage from '../../assets/login/bottom-img.png';
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export const Login = () =>{

    const nav = useNavigate();
    const [searchParams] = useSearchParams();

    const loginAs = () =>{
        const type = searchParams.get('type');
        if(type === 'seller'){
            nav('/category');
        }
        else{
            nav('/dealer');
        }
    }

    const navRegister = () =>{
        const type = searchParams.get('type');
        if(type === 'seller'){
            nav({
                pathname: '/register',
                search: `?${createSearchParams({type: 'seller'})}`
            });
        }
        else{
            nav({
                pathname: '/register',
                search: `?${createSearchParams({type: 'dealer'})}`
            });
        }
    }

    return <div className="login-page flex">
        <div className="left">
            <img src={sideimage} alt="" />
        </div>
        <div className="login-right-div">
            <div className="font-30 color-register">Login</div>
            <div className="space-v-23"></div>
            <div className="font-32 color-login">Thanks for being part of KABADIVALA family</div>

            <div className="space-v-75"></div>

            <form className="text-align-left font-14" action="">

                <div className="feild">
                    <div className="font-mont medium-bold">&nbsp;Username</div>
                    <div className="space-v-8"></div>
                    <input className="font-mont medium-bold" type="text" name="" id="" />
                </div>

                <div className="space-v-45"></div>

                <div className="feild">
                    <div className="font-mont medium-bold">&nbsp;Password</div>
                    <div className="space-v-8"></div>
                    <input className="font-mont medium-bold" type="password" name="" id="" />
                </div>

            </form>

            <div className="space-v-45"></div>

            <div className="flex-a-cen-j-cen flex-d-col login-btn-holder">

                <div onClick={loginAs} className="login-btn font-mont bold">Login</div>

                <div className="space-v-8"></div>

                <div onClick={navRegister} className="cursor-pointer color-grey">
                    <span className="font-16">Don't have an account?</span>&nbsp;
                    <span className="font-16 color-black bold">Register</span>
                </div>

            </div>


            <img src={bottomimage} className="login-bottom-img" alt="" />
        </div>
    </div>
}
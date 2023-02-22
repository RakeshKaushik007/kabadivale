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
            <div className="font-30">Login</div>
            <div className="space-v-23"></div>
            <div className="font-32">Thanks for being part of KABADIVALA family</div>

            <div className="space-v-75"></div>

            <form className="text-align-left font-14" action="">

                <div className="feild">
                    <div>&nbsp;Username</div>
                    <div className="space-v-8"></div>
                    <input type="text" name="" id="" />
                </div>

                <div className="space-v-45"></div>

                <div className="feild">
                    <div>&nbsp;Password</div>
                    <div className="space-v-8"></div>
                    <input type="password" name="" id="" />
                </div>

            </form>

            <div className="space-v-45"></div>

            <div className="flex-a-cen-j-cen flex-d-col login-btn-holder">

                <div onClick={loginAs} className="login-btn">Login</div>

                <div className="space-v-8"></div>

                <div onClick={()=> nav('/register')} className="cursor-pointer">
                    <span className="font-16">Don't have an account?</span>&nbsp;
                    <span className="font-16 bold">Register</span>
                </div>

            </div>


            <img src={bottomimage} className="login-bottom-img" alt="" />
        </div>
    </div>
}
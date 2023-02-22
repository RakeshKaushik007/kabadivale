import React from "react";
import './register.css';
import sideimage from '../../assets/register/side-img.png';
import bottomimage from '../../assets/register/bottom-img.png';
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export const Register = () => {
    const nav = useNavigate();
    const [searchParams] = useSearchParams();

    const navLogin = () => {
        const type = searchParams.get('type');
        if(type === 'seller'){
            nav({
                pathname: '/login',
                search: `?${createSearchParams({type: 'seller'})}`
            });
        }
        else{
            nav({
                pathname: '/login',
                search: `?${createSearchParams({type: 'dealer'})}`
            });
        }
    }

    return <div className="register-page flex">

        <div className="">
            <img src={sideimage} alt="" />
        </div>

        <div className="register-right-div">
            <span className="font-26">Register</span>

            <div className="space-v-75"></div>

            <form className="register-form font-14 text-align-left">
                <div>
                    <div className="feilds">
                        <div>&nbsp;First Name</div>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="space-v-13"></div>
                    <div className="feilds">
                        <div>&nbsp;Phone Number</div>
                        <input type="number" name="" id="" />
                    </div>
                    <div className="space-v-13"></div>
                    <div className="feilds">
                        <div>&nbsp;Password</div>
                        <input type="password" name="" id="" />
                    </div>
                </div>
                <div>
                    <div className="feilds">
                        <div>&nbsp;Last Name</div>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="space-v-13"></div>
                    <div className="feilds">
                        <div>&nbsp;Email</div>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="space-v-13"></div>
                    <div className="feilds">
                        <div>&nbsp;Confirm Password</div>
                        <input type="password" name="" id="" />
                    </div>
                </div>
            </form>

            <div className="space-v-40"></div>

            <div className="register-btn-holder flex-a-cen-j-cen flex-d-col">
                <div onClick={navLogin} className="register-btn cursor-pointer">Create Account</div>
                <div className="space-v-8"></div>
                <div onClick={navLogin} className="cursor-pointer">
                    Already have an account? 
                    <span className="bold">Login</span>
                </div>
            </div>

        
        
            <img className="register-bottom-img" src={bottomimage} alt="" />
        
        </div>

    </div>
}
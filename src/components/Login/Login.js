import React, { useState } from "react";
import "./Login.scss";

function login (props) {

    const signInClickHandler = () => {
        
    }

    const signInWithGoogleClickHandler = () => {

    }

    return (
        <div className="bg-img">
        <p className="tip">Welcome to this page</p>
        <div className="cont">
        <div className="form sign-in">
            <h2>Welcome back,</h2>
            <label>
            <span>Email</span>
            <input type="email" />
            </label>
            <label>
            <span>Password</span>
            <input type="password" />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="button" className="submit" onClick={signInClickHandler}>Sign In</button>
            <button type="button" className="fb-btn" onClick={signInWithGoogleClickHandler}>Connect with 
            <g> G</g>
            <first-o>o</first-o>
            <second-o>o</second-o>
            <g>g</g>
            <l>l</l>
            <first-o>e</first-o>
            </button>
        </div>
        <div className="sub-cont">
            <div className="img">
            <div className="img__text m--up">
                <h2>New here?</h2>
                <p>Sign up and upload your CV to discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
                <h2>One of us?</h2>
                <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            <div className="img__btn">
                <span className="m--up">Sign Up</span>
                <span className="m--in">Sign In</span>
            </div>
            </div>
            <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
                <span>Name</span>
                <input type="text" />
            </label>
            <label>
                <span>Email</span>
                <input type="email" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            <button type="button" className="submit">Sign Up</button>
            <button type="button" className="fb-btn">Join with <span>google</span></button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default login;
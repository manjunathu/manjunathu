import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> chat box </h3>
                    <span className="loginDesc"> Connect with people around the world</span>
                </div>
                <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton"> Log In</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
                </div>
            </div>
            
        </div>
    )
}

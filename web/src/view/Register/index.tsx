import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './index.scss'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passIsShown, setPassIsShown] = useState(false);

    return (
        <>
            <div className="page">
                <img className="loginBack" src="LoginBack.svg" alt="loginBack" />
                <img className="loginBackFiles" src="LoginBackFiles.svg" alt="loginBackRight" />                  
                <div className="formContainer">
                    <div className="form">
                        <div className="formHeader">
                            <h1>REGISTER</h1>
                        </div>
                        <div className="alternateLogins">
                            <button>
                                <img src="logo_google.svg" alt="Google" />
                            </button>
                            <button className="facebookLogin">
                                <img src="logo_apple.svg" alt="Apple" />
                            </button>
                        </div>
                        <hr className="lineText" data-content="Or sign with"/>
                        <div className="formBody">
                                <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type={passIsShown ? 'text' : 'password'} name="password" id="passwordInput" placeholder="Enter Password" unselectable="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <input type="password" name="passwordConfirmation" id="passwordConfirmationInput" placeholder="Password confirmation *" unselectable="on" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                        </div>
                        <div className="formFooter">
                            <button>Register</button>
                        </div>

                        <Link className='registerText' to='/login'>
                            <p>Joined us before ? <b>Login</b></p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
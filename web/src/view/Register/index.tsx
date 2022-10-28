import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header";
import './index.scss'
import googleAuth from "../../ApiFunctions/googleAuth";
import registerUser from "../../ApiFunctions/registerUser";

const buttons = [
    {
        name: "HOME",
        path: "/",
        isButton: false
    },
    {
        name: "LOGIN",
        path: "/login",
        isButton: true
    }
]

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passIsShown, setPassIsShown] = useState(false);
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        console.log("login with google");
        window.location.replace("http://localhost:8080/auth/google")
    }

    const handleRegister = async (e: any) => {
        e.preventDefault();
        //TODO: loader
        try {
            const res = await registerUser({email, password});
            if (res.access_token) {
                localStorage.setItem('jwt', res.access_token);
                navigate("/areas");
            } else {
                setEmail('');
                setPassword('');
                // TODO: show error message
            }
        } catch (error) {
            console.log(error);
        }
        //TODO: Remove loader
    }

    return (
        <>
        <Header buttons={buttons}/>
            <div className="page">
                <img className="loginBack" src="LoginBack.svg" alt="loginBack" />
                <img className="loginBackFiles" src="LoginBackFiles.svg" alt="loginBackRight" />                  
                <div className="formContainer">
                    <div className="form">
                        <div className="formHeader">
                            <h1>REGISTER</h1>
                        </div>
                        <div className="alternateLogins">
                            <button onClick={loginWithGoogle}>
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
                            <button onClick={handleRegister}>Register</button>
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
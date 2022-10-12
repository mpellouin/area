import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import './index.scss'

const buttons = [
    {
        name: "HOME",
        path: "/",
        isButton: false
    },
    {
        name: "REGISTER",
        path: "/register",
        isButton: true
    }
]

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passIsShown, setPassIsShown] = useState(false);

    const loginWithGoogle = async () => {
        console.log("login with google");
        window.location.replace("http://localhost:8080/auth/google")
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
                            <h1>LOG IN</h1>
                        </div>
                        <div className="formBody">
                                <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type={passIsShown ? 'text' : 'password'} name="password" id="passwordInput" placeholder="Enter Password" unselectable="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <label htmlFor="passwordInput"><b>Forgot password?</b></label>
                        </div>
                        <div className="formFooter">
                            <button>Sign In</button>
                        </div>
                        <hr className="lineText" data-content="Or sign with"/>
                        <div className="alternateLogins">
                            <button onClick={() => loginWithGoogle()}>
                                <img src="logo_google.svg" alt="Google" />
                            </button>
                            <button className="facebookLogin">
                                <img src="logo_apple.svg" alt="Apple" />
                            </button>
                        </div>
                        <Link className='registerText' to='/register'>
                            <p>Don't have an account? <b>Register now!</b></p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
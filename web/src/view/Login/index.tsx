import { useState } from "react";
import './index.scss'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passIsShown, setPassIsShown] = useState(false);

    return (
        <>
            <div className="page">
                <div className="formContainer">
                    <div className="form">
                        <div className="formHeader">
                            <h1>LOG IN</h1>
                        </div>
                        <div className="formBody">
                                <input type="email" name="email" id="email" placeholder="Enter Email"/>
                                <input type={passIsShown ? 'text' : 'password'} name="password" id="passwordInput" placeholder="Enter Password"/>
                                <label htmlFor="passwordInput" onClick={() => setPassword('')}><b>Reset password</b></label>
                        </div>
                        <div className="formFooter">
                            <button>Sign In</button>
                        </div>
                        <p className="registerText">Don't have an account? <b>Register now!</b></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
import React, {useState} from 'react';
import "../styles/Login.css"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../config/firebase";
import {useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const singIn = async e => {
        e.preventDefault();

        try {
            let data;
            data = await signInWithEmailAndPassword(auth, email, pw);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const register = async(e) => {
        e.preventDefault();

        try {
            let data;
            data = await createUserWithEmailAndPassword(auth, email, pw);
            navigate("/");
        } catch(error) {
            console.log(error);
        }

    }

    return (
        <div className="login">
            <div className="login_container">
                <h1>로그인</h1>
                <form action="">
                    <h5>이메일 </h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>비밀번호</h5>
                    <input type="password" value={pw} onChange={e => setPw(e.target.value)}/>
                    <button
                        onClick={singIn}
                        className="login_signInButton">로그인하기</button>
                </form>
                <p>이용 약관 동의하십니까?</p>
                <button
                    onClick={register}
                    className="login_registerButton">회원가입</button>
            </div>
        </div>

    );
}

export default Login;

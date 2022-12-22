import React, { useState, useEffect } from 'react';
import Router, { withRouter } from 'next/router'
import axios from 'axios';
const useLogin = () => {
    const [loginData, setLoginData] = useState({
        Email: "",
        Password: "",
    });

    const changeLoginInput = (e) => {
        let { name, value } = e.target;
        const newData = {
            ...loginData,
        };
        newData[name] = value;
        setLoginData(newData);
    };

    const loginHandler = async () => {
        console.log(loginData.Email, loginData.Password)
        const response = await axios.post("https://0871-180-252-172-207.ap.ngrok.io/api/v1/data_user/masuk", {
            Email: loginData.Email,
            Password: loginData.Password,
        })
        Router.push({
            pathname: '/home'
        })
    }

    return { loginData, setLoginData, changeLoginInput, loginHandler }
}

export default useLogin;
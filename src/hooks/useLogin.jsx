import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const useLogin = () => {
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useAuthContext();

    const login = async(email, password, role) => {
        setLoading(true);
        setLoginError('');

        const res = await fetch("http://localhost:8400/api/user/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password, role})
        })
        const data = await res.json();

        if(!res.ok){
            setLoginError(data.error);
            setLoading(false);
        }

        if(res.ok){
            dispatch({type: "LOGIN", payload:data})
            setLoading(false);
            navigate("/");
        }
    }
    return{login, loginError, loading}
};

export default useLogin;
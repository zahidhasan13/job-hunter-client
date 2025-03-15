import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const useSignup = () => {
    const [signupError, setSignupError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useAuthContext();

    const signup = async(fullName, email, password, role) => {
        setLoading(true);
        setSignupError('');

        const res = await fetch("http://localhost:8400/api/user/signup",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fullName, email, password, role})
        })
        const data = await res.json();

        if(!res.ok){
            setSignupError(data.error);
            setLoading(false);
        }

        if(res.ok){
            dispatch({type: "LOGIN", payload:data})
            setLoading(false);
            navigate("/");
        }
    }
    return{signup, signupError, loading}
};

export default useSignup;
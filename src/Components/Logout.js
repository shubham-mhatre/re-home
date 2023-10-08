import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        props.onLogin(false);
        navigate("/");
    });
}

export default Logout

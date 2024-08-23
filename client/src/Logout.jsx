import { useEffect } from "react";
import "./Logout";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Logout = () =>{

    const {LogoutUser} = useAuth();
    useEffect(() =>{
        LogoutUser();
    } , [LogoutUser]);

    return <Navigate to="/login"/>;
};
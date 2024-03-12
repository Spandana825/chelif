import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute(){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
}
import { token } from 'morgan'
import React from 'react'
import { useState,useEffect,useContext,createContext } from 'react'
const AuthContext =createContext()
const [auth,setAuth]=useState({
    user:null,
    token:""
})
import React,{useState,useEffect} from 'react';
import { Navigate } from "react-router-dom";
import {GrandNavBar} from '../components/GNB';
import {BasicArticle} from '../components/article';

const HomePage = ()=>{
    const HomePageMainDivStyle = {display:'flex',justifyContent:'space-evenly',allignItems:'center'}
    return(
        <>
            {!sessionStorage.getItem('isLoggedIn') && <Navigate to="/"/>}
            <GrandNavBar/>
            <div style={HomePageMainDivStyle}>
                <BasicArticle name={"유승우"} date={Date("2014112100")} content={"내용추가!!!!!!!"}></BasicArticle>
            </div>
        </>
    );
};

export default HomePage;
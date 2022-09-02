import React,{useState,useEffect} from 'react';
import { Navigate } from "react-router-dom";
import {GrandNavBar} from '../components/GNB';
import {BasicArticle} from '../components/article';

const HomePage = ()=>{
    const HomePageMainDivStyle = {display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}
    
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
          // 페이지 끝에 도달하면 추가 데이터를 받아온다
          // 기존의 list를 받아와 전달하기.
          console.log("pagination 호출하기")
        }
       };
      
      useEffect(() => {
        // scroll event listener 등록
        window.addEventListener("scroll", handleScroll);
        return () => {
          // scroll event listener 해제
          window.removeEventListener("scroll", handleScroll);
        };
      });
    
    return(
        <>
            <GrandNavBar/>
            <div style={HomePageMainDivStyle}>
                <BasicArticle img={"../../asset/woostagram_logo.png"}comment={"댓글 내용!"}authorNickname={"seungwoo"} name={"유승우"} date={Date("2014112100")} content={"내용추가!!!!!!!"}></BasicArticle>
                <BasicArticle img={"../../asset/woostagram_logo.png"}comment={"댓글 내용!"}authorNickname={"seungwoo"} name={"유승우"} date={Date("2014112100")} content={"내용추가!!!!!!!"}></BasicArticle>
            </div>
        </>
    );
};

export default HomePage;
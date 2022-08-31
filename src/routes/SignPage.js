import React,{useState} from 'react';
import {SignFormDiv,WoostagramImg,SignFormMain, FormContents, ChangeSignForm} from '../components/signPage';

// ---------- SignFormDiv style 
const SignFormMostOuterDivStyle ={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-evenly",
    width:"100vw",
    height:"100vh"
}

const SignFormDivStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    width:"40vw",
    height:"100vh"
}

// ---------- SignFormMain style
const SignFormMainStyle ={
    display:"flex",
    flexDirection:"column",
    border: "1px solid #e6ecf5",
    backgroundColor: '#fff',
    borderRadius:'10px',
    justifyContent:"space-evenly",
    alignItems:"center",
    height:"80%",
    width:"90%"
}

// ---------- ChangeSignForm style
const ChangeSignFormStyle={
    display:"flex",
    border: "1px solid #e6ecf5",
    justifyContent:"center",
    borderRadius:'10px',
    backgroundColor: '#fff',
    alignItems:"center",
    height:"10%",
    width:"90%"
}

// ---------- FormContents style
const FormContentsStyle ={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    width:"80%",
    
}

const SignPage = ()=>{
    const [state, setState] = useState("login");
    const changeState = () =>{
        setState((state === "login") ? "signup" : "login");
    }
    return(
        <>
            <SignFormDiv style={SignFormDivStyle} mostOuterDiv={SignFormMostOuterDivStyle}>
                <SignFormMain style={SignFormMainStyle}> 
                    <WoostagramImg/>
                    <FormContents style={FormContentsStyle} state={state}/>
                </SignFormMain>
                <ChangeSignForm style={ChangeSignFormStyle} state={state} changeState={changeState}/>
            </SignFormDiv>
        </>
    );
};

export default SignPage;
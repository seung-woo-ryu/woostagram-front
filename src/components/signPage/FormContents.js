import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const FormContents = (props)=>{
    const navigate = useNavigate();

    const [showHiddenEmail,setShowHiddenEmail] = useState(false);
    const [showHiddenNickname,setShowHiddenNickname] = useState(false);
    const [showHiddenLoginResult,setShowHiddenLoginResult] = useState(false);

    const [inputs,setInputs] = useState({
        names: " ",
        nickname: " ",
        loginPassword: " ",
        signUpPassword:" ",
        loginEmail: " ",
        signUpEmail:" "
    })
    
    const {names,nickname,loginPassword,signUpPassword,signUpEmail,loginEmail} = inputs;
        
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onClickSignUp = async (e) => {
        e.preventDefault();    
        const isDuplicatedEmail = await checkDuplicatedEmail();
        const isDuplicatedNickname = await checkDuplicatedNickname();
        
        if(!isDuplicatedEmail && !isDuplicatedNickname){
            try{
                const response = await axios({        
                    url: "http://localhost:8080/signup",
                    headers: {'Content-Type':'application/json'},
                    method:"post",
                    data: JSON.stringify({"email":signUpEmail,"nickname":nickname,"name":names,"password":signUpPassword}),
                    withCredentials: true
                });
                if(response.data.success){
                    requestLogin(signUpEmail,signUpPassword);
                }
            }catch(err){
                console.log("--------- 회원가입 에러");
                console.log(err);
            }
        }
    }

    const onClickSignIn = async (e) =>{
        e.preventDefault();
        requestLogin(loginEmail,loginPassword);
    }

    const requestLogin = async (email,password) =>{
        try{
            await axios({
                url: "http://localhost:8080/signin",
                headers: {'Content-Type':'application/json'},
                method:"post",
                data: JSON.stringify({"email":email,"password":password}),
                withCredentials: true
            });

            sessionStorage.setItem("isLoggedIn",true);
            navigate('/home');
        }catch(error){
            console.log('------- 로그인 에러');
            setShowHiddenLoginResult(true);
        }
    }
    
    const checkDuplicatedEmail = async () => {
        const {signUpEmail} = inputs;
        var result = true;
        try{
            const response = await axios({        
                url: "http://localhost:8080/signup/email",
                headers: {'Content-Type':'application/json'},
                method:"post",
                data: JSON.stringify({"email":signUpEmail}),
                withCredentials: true
            });
            setShowHiddenEmail(()=>response.data.response[0]);
            result = response.data.response[0];
        }catch(err){
            console.log("Error: email Dupliaction");
            console.log(err);
            setShowHiddenEmail(true);
        }
        return result;
    }

    const checkDuplicatedNickname = async () => {
        const {nickname} = inputs;
        var result = true;
        try{
            const response = await axios({        
                url: "http://localhost:8080/signup/nickname",
                headers: {'Content-Type':'application/json'},
                method:"post",
                data: JSON.stringify({"nickname":nickname}),
                withCredentials: true
            });
            setShowHiddenNickname(()=>response.data.response[0]);
            result = response.data.response[0];
        }catch(err){
            console.log("Error: nickname Dupliaction");
            console.log(err);
            setShowHiddenNickname(true);
        }
        return result;
    }
    
    return(
        <>
            <Box component="form" sx={{display:'flex',flexDirection:'column',justifyContent:'space-around', width:'80%',height:'70%'}}>
                {props.state === "login" ?
                <>
                        <TextField name="loginEmail" value={loginEmail}label="email" onChange={onChange}/>
                        <TextField name="loginPassword" value={loginPassword}label="password" onChange={onChange}/>    
                        <Button
                        type="submit"
                        variant="contained" onClick={onClickSignIn}> 로그인 </Button>
                        {showHiddenLoginResult && <Alert severity="error"> 로그인 정보가 올바르지 않습니다</Alert>}
                </> :
                <>
                        <TextField name="signUpEmail" value={signUpEmail} label="email" onChange={onChange}/>
                        {showHiddenEmail && <Alert severity="error">새로운 이메일을 입력해주세요</Alert>}
                        <TextField name="signUpPassword" value={signUpPassword} label="password" onChange={onChange}/>
                        <TextField name="nickname" value={nickname} label="nickname" onChange={onChange}/>
                        {showHiddenNickname && <Alert severity="error">새로운 닉네임을 입력해주세요</Alert>}
                        <TextField name="names" value={names} label="name" onChange={onChange}/>
                        
                        <Button
                        type="submit"
                        variant="contained" onClick={onClickSignUp}> 가입 </Button>     
                </>}
            </Box>
        </>
    );
};

export default FormContents;
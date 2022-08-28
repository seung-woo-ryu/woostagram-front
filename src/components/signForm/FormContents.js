import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';

const FormContents = (props)=>{
    const [isDuplicatedEmail,setIsDuplicatedEmail] = useState(false);
    const [isDuplicatedNickname,setIsDuplicatedNickname] = useState(false);

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


    const onClickSignUp = (e) => {
        e.preventDefault();
        console.log(inputs);
        
        checkDuplicated();
        if(!(isDuplicatedEmail || isDuplicatedNickname)){
            //signUP 호출
        }
    };
    
    const checkDuplicated = () => {
        const {signUpEmail,nickname} = inputs;
        
        //1. email 중복체크.
        //2. nickname 중복체크.
        // textfield밑에 hidden 추가.
        try{
            //body json형태로 삽입, withCrendentials 구문 추가.   
            const response = await axios.post('localhost:8080/',
            
            );
            console.log(response.data.response);
            
            const response2 = await axios.get('localhost:8080/');
            console.log(response2.data.response);

        }catch(err){
            console.log("checkDuplicated Error!");
            console.log(err);
        }

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
                        variant="contained"> 로그인 </Button>
                    
                </> :
                <>
                        <TextField name="signUpEmail" value={signUpEmail} label="email" onChange={onChange}/>
                        <TextField name="signUpPassword" value={signUpPassword} label="password" onChange={onChange}/>
                        <TextField name="nickname" value={nickname} label="nickname" onChange={onChange}/>
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
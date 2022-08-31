import React from 'react';
import Link from '@mui/material/Link';

const ChangeSignForm = (props)=>{
    return(
        <>
            <div style={props.style}>
                {props.state === "login" ?
                <> 게정이 없으신가요? <Link onClick={props.changeState}>가입하기</Link></> :
                <> 이미 회원이신가요? <Link onClick={props.changeState}> 로그인</Link></>}
            </div>
        </>
    );
};

export default ChangeSignForm;
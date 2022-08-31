import React from 'react';
import Container from '@mui/material/Container';

const SignFormMain = (props)=>{
    return(
        <>
            <Container sx={props.style}>
                {props.children}
            </Container>
        </>
    );
};

export default SignFormMain;
import React from 'react';

const SignFormDiv = (props)=>{
    return(
        <>
            <div style={props.mostOuterDiv}>
                <div style={props.style}>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default SignFormDiv;
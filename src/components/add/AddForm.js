import * as React from 'react';
import {Container,Box, TextField,IconButton,Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddForm = (props) =>{
  return (
    <>
        <Container sx={{marginTop:5,height:"100%",width:500,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
            <Box  sx={{border: "1px solid #e6ecf5",display:"flex",justifyContent:'center',alignItems:'center', height:"60%",width:"100%"}}>
                <IconButton >
                    <AddIcon sx={{height:"100%",width:"100%"}}/>
                </IconButton >
            </Box>
            <Box sx={{height:"20%",width:"100%"}}>
                <input placeholder="문구 입력 ..." style={{border: "1px solid #e6ecf5",height:"100%",width:"100%"}}>
                </input>
            </Box>
            <Button sx={{borderRadius:0, border: "1px solid #e6ecf5",width:"100%"}}>
                submit
            </Button>
        </Container>
    </>
  );
}

export default AddForm;

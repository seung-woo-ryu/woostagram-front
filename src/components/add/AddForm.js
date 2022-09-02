import React,{useState} from 'react';
import {Container,Box, TextField,IconButton,Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddForm = (props) =>{
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };

    return (
        <>
            <Container sx={{marginTop:5,height:"100%",width:500,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                <Box  sx={{border: "1px solid #e6ecf5",display:"flex",justifyContent:'center',alignItems:'center', height:"60%",width:"100%"}}>
                    {!imageSrc &&
                    <IconButton  variant="contained" component="label" >
                        <AddIcon sx={{height:"100%",width:"100%"}}></AddIcon>
                        <input type="file" hidden onChange={(e) => {encodeFileToBase64(e.target.files[0])}}/>
                    </IconButton >}
                    <div className="preview">
                        {imageSrc && <img src={imageSrc} alt="preview-img" />}          
                    </div>
                </Box>
                <Box sx={{height:"20%",width:"100%"}}>
                    <input type="text" placeholder="문구 입력 ..." style={{border: "1px solid #e6ecf5",height:"100%",width:"100%"}}>
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

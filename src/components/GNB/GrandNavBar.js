import React, {useState}from 'react';
import {AppBar,Toolbar,Typography,Link,Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Person4Icon from '@mui/icons-material/Person4';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

const GrandNavBar = () =>{
    const [searchList, setSearchList] = useState([]);
    
    const onChangeAutoComplete = async (e)=>{
        const {value} = e.target;
        
        if(value.length > 0){
            try{   
                const response = await axios({
                    url:"http://localhost:8080/search",
                    method:"get",
                    params: {"word": value},
                    withCredentials: true
                })

                const searchList = response.data.response[0];
                const totalList = searchList["nicknames"].concat(searchList["tags"])
                setSearchList(totalList);
            }catch(err){
                console.log("-------- 검색어 자동완성 에러")
                console.log(err);
            }
        }else{
            setSearchList([]);
        }
        
    }
    return(
        <>
            <AppBar 
                position="sticky"
                color="default"
                elevation={3}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, height:'8vh',display:'flex',justifyContent:'center'}}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <IconButton sx={{border:'solid',marginRight:'10px'}}>
                        <Badge>
                            <InstagramIcon fontSize="large"/>
                        </Badge>
                    </IconButton>
                    
                    <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Woostagram
                    </Typography>
                    <Autocomplete
                        sx={{width:"20vw"}}
                        id="free-solo-2-demo"
                        disableClearable
                        options={searchList}
                        renderInput={(params) => (
                        <TextField
                            onChange={onChangeAutoComplete}
                            {...params}
                            label="Search input"
                            InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            }}
                        />
                        )}
                    />
                    <IconButton sx={{marginRight:'10px'}}>
                        <Badge>
                            <NotificationsIcon fontSize="large"/>
                        </Badge>
                    </IconButton>

                    <IconButton sx={{marginRight:'10px'}}>
                        <Badge>
                            <FavoriteIcon fontSize="large"/>
                        </Badge>
                    </IconButton>
                    
                    <IconButton sx={{marginRight:'10px'}}>
                        <Badge>
                            <Person4Icon fontSize="large"/>
                        </Badge>
                    </IconButton>

                    <IconButton sx={{marginRight:'10px'}}>
                        <Badge>
                            <AddCircleIcon fontSize="large"/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default GrandNavBar;
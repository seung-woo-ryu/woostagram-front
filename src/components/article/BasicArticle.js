import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCommentIcon from '@mui/icons-material/AddComment';


const BasicArticle = (props) =>{
  return (
    <Card sx={{ width: 500,minHeight:500,  marginTop:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            seungwoo
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={require("../../asset/woostagram_logo.png")}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <AddCommentIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
      <CardContent sx={{padding:1}}>
        <Typography variant="button" color="text.primary" sx={{fontWeight: "bold",marginRight:1}}>
          {props.authorNickname}
        </Typography>
        <Typography variant="caption" color="text.primary">
          {props.comment}
        </Typography>
      </CardContent>

      <CardContent sx={{padding:1}}>
        <Typography variant="button" color="text.primary" sx={{fontWeight: "bold",marginRight:1}}>
          {props.authorNickname}
        </Typography>
        <Typography variant="caption" color="text.primary">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicArticle;
import * as React from 'react';
import {useState,useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button,Checkbox } from '@mui/material';
import './ChooseProduct.css';
import { platformContext } from "../context/Context";


const SetPlatform = () => {

  const [border1,setBorder1]=useState(true)
  const [border2,setBorder2]=useState(true)
  const [border3,setBorder3]=useState(true)
  const [border4,setBorder4]=useState(true)
  const [border5,setBorder5]=useState(true)
 
  const {setplatform} =useContext(platformContext)


  const setPlatform=(e,value,type)=>{

    e.preventDefault();

   if(type==="one"){
    setBorder5(true)
    setBorder2(true)
    setBorder3(true)
    setBorder4(true)
    setBorder1(!border1)
   
   }else if(type==="two"){
     setBorder5(true)
    setBorder1(true)
    setBorder3(true)
    setBorder4(true)
    setBorder2(!border2)
   }else if(type==="three"){
    setBorder5(true)
   setBorder1(true)
   setBorder2(true)
   setBorder4(true)
   setBorder3(!border3)
  }else if(type==="four"){
    setBorder1(true)
    setBorder2(true)
    setBorder3(true)
    setBorder5(true)
    setBorder4(!border4)
   }else if(type==="five"){
    setBorder1(true)
    setBorder2(true)
    setBorder3(true)
    setBorder4(true)
    setBorder5(!border5)
   }


    setplatform(value)

  }


  return (
    <> 
         
    <div className="flex-container" style={{margin:"50px 15px 300px 220px"}}>

<div>
<Card sx={{ maxWidth: 250 }} style={border1 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setPlatform(e,"Google","one")} >
<CardActionArea>

 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     Get Leads as Call
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Reach broad audience and get leads through calls
   </Typography>

 </CardContent>
</CardActionArea>
</Card>

</div>
<div>
<Card sx={{ maxWidth: 250 }} style={border2 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setPlatform(e,"FB","two")}>
<CardActionArea>

 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     Get leads as Facebook messages
   </Typography>
   <Typography variant="body2" color="text.secondary">
    Get more FB messages as LEads
   </Typography>
 
 </CardContent>
</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }} style={border3 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setPlatform(e,"FB","three")}>
<CardActionArea>

 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     Increase page followers
   </Typography>
   <Typography variant="body2" color="text.secondary">
     Encourage customers to follow your page
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }} style={border4 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setPlatform(e,"Youtube","four")}>
<CardActionArea>

 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     Get more youtube views
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Increase organic views by obtaining user attention
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }} style={border5 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setPlatform(e,"Instagram","five")}>
<CardActionArea>

 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
 Get more website traffic.
   </Typography>
   <Typography variant="body2" color="text.secondary">
 Get the right people to visit your website
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>
   </div>
   </>
  )
}

export default SetPlatform 
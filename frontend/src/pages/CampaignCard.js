import * as React from 'react';
import {useState,useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button,Checkbox } from '@mui/material';
import {productData} from "./productData";
import './ChooseProduct.css';
import { campaignContext } from "../context/Context";


const CampaignCard = () => {

  const [border1,setBorder1]=useState(true)
  const [border2,setBorder2]=useState(true)
  const [border3,setBorder3]=useState(true)
  const [border4,setBorder4]=useState(true)
  const [border5,setBorder5]=useState(true)

  const {setcampaigncard}=useContext(campaignContext)

  const setCampaign=(e,value,type)=>{

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

   setcampaigncard(value)

  



  }

  


  return (
    <> 
    
              
              
    <div className="flex-container" style={{margin:"50px 15px 300px 220px"}}>

<div>
<Card sx={{ maxWidth: 250 }}   style={border1 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setCampaign(e,{
      name: productData[0].name,
      price:  productData[0].price
    },"one")}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[0].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {productData[0].name}
   </Typography>
   <Typography variant="body2" color="text.secondary">
     {productData[0].price}
   </Typography>
 
 </CardContent>
</CardActionArea>
</Card>

</div>
<div>
<Card sx={{ maxWidth: 250 }}  style={border2 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setCampaign(e,{
      name: productData[1].name,
      price:  productData[1].price
    },"two")}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[1].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {productData[1].name}
   </Typography>
   <Typography variant="body2" color="text.secondary">
     {productData[1].price}
   </Typography>

 </CardContent>
</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }}  style={border3 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setCampaign(e,{
      name: productData[2].name,
      price:  productData[2].price
    },"three")}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[2].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {productData[2].name}
   </Typography>
   <Typography variant="body2" color="text.secondary">
     {productData[2].price}
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }}  style={border4? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setCampaign(e,{
      name: productData[3].name,
      price:  productData[3].price
    },"four")}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[3].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {productData[3].name}
   </Typography>
   <Typography variant="body2" color="text.secondary">
     {productData[3].price}
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }}  style={border5 ? {}:{
      border:"10px solid blue"
    }}  onClick={(e)=>setCampaign(e,{
      name: productData[4].name,
      price:  productData[4].price
    },"five")}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[4].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {productData[4].name}
   </Typography>
   <Typography variant="body2" color="text.secondary">
     {productData[4].price}
   </Typography>
 </CardContent>
 
</CardActionArea>
</Card>

</div>
   </div>
   </>
  )
}

export default CampaignCard
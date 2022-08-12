import * as React from 'react';
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button,Checkbox } from '@mui/material';
import {productData} from "./productData";
import './ChooseProduct.css';
import { Link } from "react-router-dom";

const FinalCard = () => {
  return (
    <> 
    
              
              
    <div className="flex-container" style={{margin:"50px 15px 300px 220px"}}>

    <div>
<Card sx={{ maxWidth: 250 }}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[2].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   Mukund Cake Shop
   </Typography>
   <Typography variant="body2" color="text.secondary">
We are best balkery around you
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>
<div>
<Card sx={{ maxWidth: 250 }}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[2].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   Mukund Cake Shop
   </Typography>
   <Typography variant="body2" color="text.secondary">
We are best balkery around you
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>
<div>
<Card sx={{ maxWidth: 250 }}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[2].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   Mukund Cake Shop
   </Typography>
   <Typography variant="body2" color="text.secondary">
We are best balkery around you
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>

<div>
<Card sx={{ maxWidth: 250 }}>
<CardActionArea>
 <CardMedia
   component="img"
   height="50"
   image={productData[2].pictureURL}
   alt="green iguana"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   Mukund Cake Shop
   </Typography>
   <Typography variant="body2" color="text.secondary">
We are best balkery around you
   </Typography>
 </CardContent>

</CardActionArea>
</Card>

</div>


   </div>
   </>
  )
}

export default FinalCard
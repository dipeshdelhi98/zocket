import * as React from 'react';
import {useState} from 'react'
import axios from 'axios';

import { Button } from '@mui/material';
import {productData} from "./productData";
import './ChooseProduct.css';
import { Link } from "react-router-dom";
import CampaignSetting from "./CampaignSetting";
import CampaignCard from "./CampaignCard"
import SetPlatform from "./SetPlatform"
import {useNavigate} from  'react-router-dom'
import FinalCard from './FinalCard';
import { platformContext,campaignContext,settingContext } from "../context/Context";



let campaignObj={}

export default function ChooseProduct() {

  const [toggle,settoggle]=useState(0);

  const [platform,setplatform]=useState("")
  const [campaigncard,setcampaigncard]=useState({})

  const [setting,setsetting]=useState({})


  const navigate=useNavigate()

  const switchHandler=async ()=>{
    settoggle(toggle+1);

  

    if(toggle===3){
      settoggle(0)

      campaignObj={
        price:campaigncard?.price ,
        campaign:campaigncard?.name ,
        dateRange:`${setting.startDate}-${setting.endDate}`,
        clicks:Math.floor(Math.random() * 500),
        budget:setting?.budget,
        location:setting?.location ,
        radius:setting?.radius ,
        platform:platform ,
        status:"Live Now"

      }

      const response=await axios.post("http://localhost:4000/zocket/create",{
        campaignObj
      })

     
      navigate("/")
    }

  }

  return (
  
  <div>

    {(toggle===0)? 
    <platformContext.Provider value={{setplatform}}>
      <SetPlatform />
    </platformContext.Provider>   :(toggle===1)? 

    <campaignContext.Provider value={{setcampaigncard}}>
      <CampaignCard/>
    </campaignContext.Provider>
    
    :(toggle===2)?
    <settingContext.Provider value={{setsetting}}>
       <CampaignSetting/>

    </settingContext.Provider> 
    :
    <FinalCard/> }
 
  
  <Button onClick={switchHandler} style={{
      float:"right",
    bottom: "100px",
    top:"-310px",
    padding:"10px 50px 10px 50px",
    right: "20px"}} variant="contained">{(toggle==3)? "Start your Campaign" : "Continue"}</Button>
    </div>

    

  


  );
}

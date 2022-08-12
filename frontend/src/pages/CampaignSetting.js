import React,{useState,useContext} from 'react'
import './CampaignSetting.css'
import LocationPicker from 'react-location-picker';
import {Slider,Typography} from '@mui/material';
import moment from 'moment'

import {settingContext}  from '../context/Context'

const settingObj={
  startDate:moment().format("YYYY-MM-DD"),
  endDate:moment().format("YYYY-MM-DD"),
  location:"Delhi",
  budget:"100 INR",
  radius:"1 KM"

}


const CampaignSetting = () => {

  const [start,setstart]=useState("")
  const [end,setend]=useState("")
  const [location,setlocation]=useState("")
  const [radius,setradius]=useState("")
  const [budget,setbudget]=useState("")

  const {setsetting}=useContext(settingContext)

  const settinghandler=(e,type)=>{

    if(type==="startdate"){
     setstart(e.target.value)
     settingObj.startDate=e.target.value;
    }else if(type==="enddate"){
      setend(e.target.value)
      settingObj.endDate=e.target.value;
    }else if(type==="location"){
      setlocation(e.target.value)
      settingObj.location=e.target.value
    }else if(type==="radius"){
      setradius(e.target.value)
      settingObj.radius=`${e.target.value} KM`
    }else if(type==="budget"){
      setbudget(e.target.value)
      settingObj.budget=`INR ${e.target.value}`
    }




    setsetting(settingObj)

  }

  const bmarks = [
    {
      value: 100,
      label: '100 INR',
    },
   
    {
      value: 100000,
      label: '1,00,00 INR',
    },
  ];

  function bvaluetext(value) {
    return `${value} INR`;
  }

  const rmarks = [
    {
      value: 1,
      label: '1KM',
    },
   
    {
      value: 30,
      label: '30KM',
    },
  ];

  function rvaluetext(value) {
    return `${value}KM`;
  }
  return (
    
    <div style={{margin:"50px 15px 15px 220px"}}>
        <form>

       
          <div style={{margin:"10px 10px 10px 10px"}}>
            
  <label for="start">Start Date</label>
  <input type="date" id="start" value={start} name="start" required onChange={(e)=>settinghandler(e,"startdate")}></input>
            
            </div>
            <div style={{margin:"10px 10px 10px 10px",
          }}>
            <label for="end">End  Date</label>
  <input type="date" id="end" value={end} name="end" required onChange={(e)=>settinghandler(e,"enddate")}></input>
            
            </div>


            <div style={{margin:"10px 10px 10px 10px"}}>

            <Typography gutterBottom variant="h5" component="div">
 Enter campaign budget
   </Typography>
<Slider 

onChange={(e)=>settinghandler(e,"budget")}
 style={{width:"600px"}}
 value={budget}
 
  defaultValue={0}
  getAriaValueText={bvaluetext}

  valueLabelDisplay="on"
  step={1}
  marks={bmarks}
  min={100}
  max={100000}
/>
  
</div>







            <div style={{margin:"10px 10px 10px 10px"}}>
            <label for="location">Location</label>
       <input type="text" id="location" name="location" onChange={(e)=>settinghandler(e,"location")}/>
            </div>


            <div style={{margin:"10px 10px 10px 10px"}}>

{/* <label for="radius">Enter your radius</label>
<input type="number" id="radius" name="radius" required/> */}

<Typography gutterBottom variant="h5" component="div">
     Select your radius
   </Typography>
<Slider 
onChange={(e)=>settinghandler(e,"radius")}
 style={{width:"600px"}}
  aria-label="Temperature"
  defaultValue={0}
  getAriaValueText={rvaluetext}

  valueLabelDisplay="on"
  step={1}
  marks={rmarks}
  min={1}
  max={30}
/>
  
</div>

      
</form>
    </div>
  )
}

export default CampaignSetting
import * as React from 'react';
import {useState,useEffect}  from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { TextField ,Checkbox,Button,Select,SelectChangeEvent,FormControl,MenuItem,InputLabel} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import rows from "./rowsData";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

import {AiOutlinePlusCircle,AiFillEdit,AiFillDelete} from 'react-icons/ai'


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));





const Home= () =>{

  const [tableData,settableDate]=useState([])
  const [change,setchange]=useState(true);
  const [search,setsearch]=useState("")
  const [platform, setplatform] = useState('');
  const [status,setstatus]=useState("")
  const [click,setclick]=useState("")
  const [budget,setbudget]=useState("")

  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(tableData.length / PER_PAGE);
  const _DATA = usePagination(tableData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };


  const statusChange=(e)=>{
    e.preventDefault()
    setstatus(e.target.value)
  }
  const budgetChange=(e)=>{
    e.preventDefault()
    setbudget(e.target.value)
    setclick("")
  }
  const clickChange=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setclick(e.target.value)
    setbudget("")
  }
  const platformChange = (e) => {
    e.preventDefault()
    setplatform(e.target.value);
  };

  const deleteHandler=((e,id)=>{

    axios.delete(`http://localhost:4000/zocket/remove/${id._id}`).then((data)=>{

 setchange(!change)
     
        
       }).catch((err)=>{
         console.log(err)
       })

  })

  const filtering=(e)=>{
    e.preventDefault();

    setsearch(e.target.value)
  }

  useEffect(()=>{
    axios.get(`http://localhost:4000/zocket/all?campaign=${search}&platform=${platform}&status=${status}&clicks=${click}&budget=${budget}`).then((data)=>{

 settableDate(data.data.data)

   
  }).catch((err)=>{
    console.log(err)
  })

  },[change,search,platform,status,click,budget])

  



 

  return (

    <>
    <Link to="/chooseproduct" className="menu-bars">
    <Button style={{float:"right",
margin:"10px 5px 10px 0px"}} variant="contained"><AiOutlinePlusCircle
style={{marginRight:"10px"}}/>Create New Campaign</Button>
              </Link>


<div style={{margin:"50px 15px 15px 220px"}}>



<TextField size="small" value={search} label="Search for the campaign" variant="outlined" style={{
    marginBottom:"30px"
}} onChange={filtering}/>

<FormControl sx={{ m: 1, minWidth: 120 }}  style={{
            left:"450px",
         
        }}  size="medium">
<InputLabel id="demo-select-small">All Platform</InputLabel>
<Select
          labelId="demo-select-small"
          id="demo-select-small"
         
          value={platform}
          onChange={platformChange}
          label="All Platform"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"Google"}>Google</MenuItem>
          <MenuItem value={"FB"}>FB</MenuItem>
          <MenuItem value={"Instagram"}>Instagram</MenuItem>
          <MenuItem value={"Youtube"}>Youtube</MenuItem>
        </Select>
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 120 }}  style={{
            left:"500px",
         
        }}  size="medium">
<InputLabel id="demo-select">Status</InputLabel>
<Select
          labelId="demo-select"
          id="demo-select"
         
          value={status}
          onChange={statusChange}
          label="Status"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"Live Now"}>Live Now</MenuItem>
          <MenuItem value={"Exhausted"}>Exhausted</MenuItem>
          <MenuItem value={"Paused"}>Paused</MenuItem>
          
        </Select>
  </FormControl>

    
    <Paper className="container">
      <Table>
    
        <TableHead>
          <TableRow>
            
          <TableCell><Checkbox /></TableCell>
           
            <TableCell>On/Off</TableCell>
            <TableCell numeric>Campaign</TableCell>
            <TableCell numeric>Date Range</TableCell>
            <TableCell numeric>Clicks

            <Select
              value={click}
              onChange={clickChange}
              label="Sort By">

<MenuItem value="">
            <em>All</em>
          </MenuItem>
      
          <MenuItem value={"1"}>ASC</MenuItem>
          <MenuItem value={"-1"}>DESC</MenuItem>
    

            </Select>
            
            </TableCell>
            <TableCell numeric>Budget
            
            
            <Select
             value={budget}
              onChange={budgetChange}
              label="Sort By">

<MenuItem value="">
            <em>All</em>
          </MenuItem>
      
          <MenuItem value={"1"}>ASC</MenuItem>
          <MenuItem value={"-1"}>DESC</MenuItem>
    

            </Select></TableCell>
            <TableCell numeric>Location</TableCell>
            <TableCell numeric>Platform</TableCell>
            <TableCell numeric>Status</TableCell>
            <TableCell numeric>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { _DATA.currentData().map(({ _id,campaign,dateRange,clicks,budget,location,platform,status }) => (
            <TableRow key={_id}>
                <TableCell><Checkbox /></TableCell>
                <TableCell> <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack></TableCell>
      <TableCell numeric>{campaign}</TableCell>
              <TableCell numeric>{dateRange}</TableCell>
              <TableCell numeric>{clicks}</TableCell>
              <TableCell numeric>{budget} INR</TableCell>
              <TableCell numeric>{location}</TableCell>
              <TableCell numeric>{platform}</TableCell>
              <TableCell numeric>{status}</TableCell>
              <TableCell numeric>   <AiFillDelete onClick={(e)=>deleteHandler(e,{_id})}/></TableCell>
             
            </TableRow>
          ))}
        </TableBody>

        <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
        
      </Table>
    </Paper>
  </div>
    </>
  
);
} 

export default Home 

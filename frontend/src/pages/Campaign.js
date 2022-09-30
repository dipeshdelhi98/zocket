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

import axios from 'axios';
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





const Campaign= () =>{

  const [tableData,settableDate]=useState([])
  const [change,setchange]=useState(true);
  const [search,setsearch]=useState("")

  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(tableData.length / PER_PAGE);
  const _DATA = usePagination(tableData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
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
    axios.get(`http://localhost:4000/zocket/all?campaign=${search}`).then((data)=>{

 settableDate(data.data.data)

   
  }).catch((err)=>{
    console.log(err)
  })

  },[change,search])

  



 

  return (

    <>



<div style={{margin:"50px 15px 15px 220px"}}>



<TextField size="small" value={search} label="Search for the campaign" variant="outlined" style={{
    marginBottom:"30px"
}} onChange={filtering}/>

<FormControl sx={{ m: 1, minWidth: 120 }}  style={{
            left:"450px",
         
        }}  size="medium">


  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 120 }}  style={{
            left:"500px",
         
        }}  size="medium">

  </FormControl>

    
    <Paper className="container">
      <Table>
        <TableHead>
    
        </TableHead>
        <TableBody>
        {(search==="") ? "" :  _DATA.currentData().map(({ _id,campaign }) => (
            <TableRow key={_id}>
                
      <TableCell numeric>{campaign}</TableCell>
             
              <TableCell numeric>    <AiFillDelete onClick={(e)=>deleteHandler(e,{_id})}/></TableCell>
             
            </TableRow>
          )) } 
        </TableBody>
      </Table>
    </Paper>
  </div>
    </>
  
);
} 

export default Campaign

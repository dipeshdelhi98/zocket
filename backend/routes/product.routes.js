const express=require('express');

const route=express.Router()

const {create,getAll,deleteById} =require('../controllers/product.controller')



route.post('/create',create)

route.get('/all',getAll)

route.delete('/remove/:id',deleteById)



module.exports=route;
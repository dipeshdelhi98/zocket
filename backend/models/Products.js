const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    campaign:{
    type:String,
     },
    radius:String,
    price:String,
    dateRange:String,
    clicks:String,
    budget:String,
    location:String,
    platform:String,
    status:{
        type:String,
        enum:["Live Now","Paused","Exhausted"]
    }
    
});

const productModel=mongoose.model('products',productSchema);

module.exports=productModel;
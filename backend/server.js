const express=require('express')
const app=express();
const PORT=4000;
const cors=require('cors');
const mongoURL='mongodb+srv://root:root@cluster0.9gwkj.mongodb.net/test?retryWrites=true&w=majority'
const mongoose=require('mongoose')
const productRouter=require('./routes/product.routes')

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
 },()=>{
    console.log("Database is connected successfully.....")
})

app.use(express.json());

app.use(cors())

app.use('/zocket',productRouter)



app.listen(PORT,()=>{
    console.log(`Server is successfully ${PORT}`)
})
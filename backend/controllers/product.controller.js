const Products=require('../models/Products')

module.exports={

    create:async(req,res)=>{

        try{

           

            const productData=new Products(req.body.campaignObj)

            await productData.save()

            return res.status(200).json({
                status:"Success",
                data:productData
            })

        }catch(err){

            console.log(err,"error")

            return res.status(400).json({
                status:"Something Went Wrong"
            })

        }

      
    },
    
    getAll:async(req,res)=>{
        
        try{

            
            const {campaign,platform,status}=req.query

            let filter={}

            if(campaign){
                filter.campaign= { $regex: campaign, $options: 'i' }
            }

            if(platform){
                filter.platform={ $regex: platform, $options: 'i' }
            }
            if(status){
                filter.status={ $regex: status, $options: 'i' }

            }

    

            const productData=await Products.find(filter)
            return res.status(200).json({
                status:"Success",
                data:productData
            })

        }catch(err){

            console.log(err,"error")

            return res.status(400).json({
                status:"Something Went Wrong"
            })

        }

    },


     deleteById:async(req,res)=>{
        
        try{

         

           await Products.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                status:"Success",
                
            })

        }catch(err){

            console.log(err,"error")

            return res.status(400).json({
                status:"Something Went Wrong"
            })

        }

    }
}
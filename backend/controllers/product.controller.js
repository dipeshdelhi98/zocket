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

            
            const {campaign,platform,status,clicks,budget}=req.query

            let filter={}

            let mysort;

            if(campaign){
                filter.campaign= { $regex: campaign, $options: '$i' }
            }

            if(platform){
                filter.platform={ $regex: platform, $options: '$i' }
            }
            if(status){
                filter.status={ $regex: status, $options: '$i' }

            }

            if(clicks){
                mysort={clicks:clicks}
            }

            if(budget){
            
                mysort={budget:budget}
            }

        

    

            const productData=await Products.find(filter).sort(mysort)


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
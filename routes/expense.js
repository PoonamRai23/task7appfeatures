const express=require('express')
const router=express.Router()
const path=require('path')
const Sequelize=require('../utill/user')
const expense=require('../models/expense')
const cors=require('cors')
router.use(cors())
const bodyparser=require('body-parser')

router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())
 router.use(express.static(path.join(__dirname,'views')))


router.post('/expense',async(req,res)=>{
    try{
        const itemname=req.body.name
        const description=req.body.description
        const category=req.body.category


        const data=await expense.create({
            itemname:itemname,
            description:description,
            category:category
        })
        res.status(200).json({expensedata:data})
    }
    catch(error){
        console.log("error..........>>>>>>>>>>",error)
    }

})
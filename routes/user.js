const express=require('express')
const router=express.Router()
const path=require('path')
const cors=require('cors')
const user=require('../models/user')
router.use(cors())
const bodyparser=require('body-parser')

router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())
 router.use(express.static(path.join(__dirname,'views')))



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','html' ,'signup.html'))
    console.log("hhiii")
})

router.post('/sign-up',async(req,res)=>{
    try{
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password

    if(name===undefined||name.length===0 ||password===undefined||password.length=== 0||email===undefined||email.length===0){
        return res.status(400).json({err:'bad parameters something is missing'})
    }

    console.log("this is server end response",name,email,password)
    const data=await user.create({
        name:name,
        email:email,
        password:password
    })
    res.status(200).json({addexpense:data})

   
}
catch(error){
    console.log("failed",error)
}

})


router.post('/login',async(req,res)=>{
    try{
      const{email,password}=req.body

      console.log('email>..>>>>>>>',email,password)

      if(email.length===undefined||email.length===0||password===undefined||password.length===0){
        return res.status(400).json({message:'emailID or pswd is missing'})
      }
      const User=await user.findAll({where:{email:email}})
      console.log('user>>>>>>>>>>>>>>>>>>>>>>>>',User)
      if(User.length>0){
        console.log('user exist')
        if(User[0].password===req.body.password){
            return res.status(200).json({message:'user logged in successfully'})
        }
        else{
            return res.status(400).json({message:'password is not correct'})
        }
      
      }
      else{
        return res.status(400).json({message:'user doesnot exist'})
      }

    }
    catch(error){
        console.log('errrrrr',error

        )

    }
})

module.exports=router
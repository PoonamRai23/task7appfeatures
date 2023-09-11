const express= require('express')
const app=express()
const path=require('path')
const bodyparser=require('body-parser')
const sequelize=require('./utill/user')

const userRouter =require('./routes/user')
const cors=require('cors')
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
 app.use(express.static(path.join(__dirname,'views')))

 app.use('/',userRouter)




sequelize.sync({alter:true})
.then((result)=>{
    console.log('data sync',result)

    app.listen(3050)
}) 
.catch((error)=>{
    console.log(error)

})
// app.listen(3050)
const sequelize=require('sequelize')
const Sequelize=require('../utill/user')
const Expense=Sequelize.define('user',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    name:{
       type:sequelize.STRING,
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
         unique:true
    },
    password:{
        type:sequelize.STRING,
        allowNull:false

    },
   
})
module.exports=Expense
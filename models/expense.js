const sequelize=require('sequelize')
const Sequelize=require('../utill/user')
const expense=Sequelize.define('expense',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primarykey:true,
        unique:true
    },
    itemname:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    description:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    category:{
        type:sequelize.INTEGER,
        allowNull:false
    }

})
module.exports=expense
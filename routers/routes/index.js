const express = require("express");
const {creatUser,getAlluser}=require("./../controllers/index")
 

const userRouter =express.Router()

userRouter.post("/create",creatUser)
userRouter.get("/",getAlluser)
module.exports=userRouter;

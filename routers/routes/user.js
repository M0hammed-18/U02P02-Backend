const express = require("express");
const { creatUser, getAlluser, update } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/create", creatUser);
userRouter.get("/", getAlluser);
userRouter.put("/update/:id", update);
module.exports = userRouter;

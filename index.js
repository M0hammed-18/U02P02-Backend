const express=require("express")
const dotenv = require("dotenv");
require("./DB/db")

dotenv.config();

const app = express();
const PORT = process.env.PORT

const userRouter= require ("./routers/routes/index")
app.use(express.json());

app.use("/users",userRouter)

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
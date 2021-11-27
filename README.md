## U02P02-Backend
[ Trello Link](https://trello.com/b/KSMjsitI/backend)

# Project Title:
Weapon store.

# Package I used:
1.axios
2.cors
3.dotenv
4.express
5.mongoose
6.morgan

# Build Server:
Express

> npm i express

# DB :
```Java Secript
 const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dotenv = require("dotenv");
dotenv.config();

const DB = process.env.DB;
mongoose.connect(DB, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);

const express = require("express");
const { creatProduct, getAllproduct } = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/add", creatProduct);
productRouter.get("/", getAllproduct);
module.exports = productRouter;

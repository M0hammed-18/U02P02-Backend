const productModel = require("../../DB/models/productSchema");
const mongoose = require("mongoose");

const creatProduct = (req, res) => {
  const { name, img, price, kind } = req.body;

  const newProduct = new productModel({
    name,
    img,
    price,
    kind,
  });
  newProduct
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getAllproduct = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const update = (req, res) => {
  const { id } = req.params;
  const { name, img, price, kind } = req.body;
  productModel
    .findOneAndUpdate({ _id: id }, { name, img, price, kind }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const remove = (req, res) => {
  const { id } = req.params;
 
  productModel.findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { creatProduct, getAllproduct, update, remove };

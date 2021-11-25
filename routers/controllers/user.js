const userModel = require("../../DB/models/userSchema");
const mongoose = require("mongoose");

const creatUser = (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new userModel({
    name,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAlluser = (req, res) => {
  userModel
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
  const { name, password, email } = req.body;
  userModel
    // first parameter is the condition where we will search for the id of the user in our database
    // second parameter new value that we want to update
    // third parameter is options, we used the option new so that we can return the modified user
    .findOneAndUpdate({ _id: id }, { name, password, email }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { creatUser, getAlluser, update };

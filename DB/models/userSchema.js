const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favoriteSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
});

module.exports = mongoose.model("User", userSchema);

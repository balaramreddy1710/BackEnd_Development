const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  age: Number,
  email: String,
});

module.exports = mongoose.model("User", UserSchema);

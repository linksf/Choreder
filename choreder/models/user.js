const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    default: null
  },
  points: {
    type: Number,
    default: 0
  },

  pastChores: {
    type: Schema.Types.ObjectId,
    ref: "Chores"
  }

})
module.exports = mongoose.model("User", userSchema)
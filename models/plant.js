const mongoose = require('mongoose')
const Schema = mongoose.Schema
//blue print for our database
const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {type: String, required: true},
  },
  {timestamps: true},
)
//first argument is collection , second argument is the Schema
module.exports = mongoose.model('plants', Plant)
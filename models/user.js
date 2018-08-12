const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    googleid: String,
    freeToken: String,
})

const User = mongoose.model('user', userSchema)

module.exports = User
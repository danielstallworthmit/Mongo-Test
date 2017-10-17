const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post');

const UserSchema = new Schema({
    name: String,
    posts: [PostSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
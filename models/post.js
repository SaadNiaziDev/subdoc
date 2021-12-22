const mongoose = require('mongoose');
const comments = require('./data');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: 'string' },
    user: { type: 'string' },
    comments: { type: mongoose.Types.ObjectId , ref: 'comment' },
})

const postModel = mongoose.model('post', postSchema);


module.exports = postModel;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: { type: 'string' },
    location: { type: 'string' },
});

const commentModel = mongoose.model('comment', commentSchema);
module.exports= commentModel;


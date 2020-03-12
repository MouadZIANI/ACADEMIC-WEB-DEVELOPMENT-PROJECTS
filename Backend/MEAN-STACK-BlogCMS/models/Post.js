var mongoose = require('mongoose'), Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    category : { type: Schema.Types.ObjectId, ref: 'Category' },
    id: String,
    title: String,
    author: String,
    description: String,
    content: String,
    reference: String,
    imgUrl: String,
    created: { type: Date },
    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);

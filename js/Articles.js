const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
    title: String,
    textPost: String,
    datePost: { type: Date, default: Date.now },
    author: String
});
mongoose.model('Article', ArticleSchema);

module.exports = mongoose.model('Article');

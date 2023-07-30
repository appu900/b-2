const mongoose = require('mongoose');

module.exports = mongoose.model('content',{
    title:String,
    description:String,
    imgUrl:String,
});
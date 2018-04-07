var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    message:String,
    postedAt: {type:Date, default: Date.now},//mongo's version of timestamp
    user: userModel //may need to revisit this
});


var Message = mongoose.model("Message", messageSchema);
module.exports = Message;
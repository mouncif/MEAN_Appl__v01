var mongoose = require('mongoose');
var userschema = mongoose.Schema({
    firstName:{
        type:String,
        required : true
    },
    lastName:{
        type:String,
        required : true
    },
    userame:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    age:String,
    create_date:{
        type:Date,
        defaul : Date.now
    }
});

var User = module.exports = mongoose.model('user', userschema);

module.exports.get = function(callback, limit){
   User.find(callback).limit(limit);
}